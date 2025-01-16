import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from '../../core/services/user.service';
import { User, UserFormData } from '../../core/models/user.model';
import { UserFormComponent } from '../../shared/components/user-form/user-form.component';
import { ConfirmationDialogComponent } from '../../shared/components/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  displayedColumns: string[] = [
    'firstName',
    'lastName',
    'email',
    'createdAt',
    'description',
    'tags',
    'actions'
  ];
  
  dataSource: MatTableDataSource<User> = new MatTableDataSource<User>([]);
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private userService: UserService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    console.log('UsersComponent initialized');
    this.loadUsers();
    
    this.userService.users$.subscribe(users => {
      console.log('Users loaded:', users);
      this.dataSource.data = users;
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  loadUsers(): void {
    this.userService.loadUsers().subscribe({
      next: (users) => {
        console.log('Users loaded successfully:', users);
        this.dataSource.data = users;
      },
      error: (error) => console.error('Error loading users:', error)
    });
  }

  openUserForm(user?: User, index?: number): void {
    const dialogRef = this.dialog.open(UserFormComponent, {
      width: '600px',
      data: { user }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (index !== undefined) {
          this.userService.updateUser(index, result);
        } else {
          this.userService.addUser(result);
        }
      }
    });
  }

  confirmDelete(index: number): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '400px',
      data: {
        title: 'Confirm Delete',
        message: 'Are you sure you want to delete this user?'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.userService.deleteUser(index);
      }
    });
  }

  formatTags(tags: string[]): string {
    return tags ? tags.join(', ') : '';
  }

  onPageChange(event: any): void {
    console.log('Page changed:', event);
  }

  onRowClick(row: User): void {
    console.log('Row clicked:', row);
  }


  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
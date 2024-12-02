// src/app/tasks/tasks.component.ts
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';  // Import ApiService


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'], // Verify this file exists, even if empty
})

export class TasksComponent implements OnInit {
  tasks: any[] = [];
  userId: string = '123'; // Example userId, replace with actual user logic

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks() {
    this.apiService.getTasks().subscribe({
      next: (tasks) => {
        this.tasks = tasks;
      },
      error: (err) => {
        console.error('Error loading tasks', err);
      }
    });
  }

  createTask(task: any) {
    this.apiService.createTask(task).subscribe({
      next: (newTask) => {
        this.tasks.push(newTask);
      },
      error: (err) => {
        console.error('Error creating task', err);
      }
    });
  }
}

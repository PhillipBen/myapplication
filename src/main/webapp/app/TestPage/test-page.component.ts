import { Component, OnDestroy, OnInit, inject, signal } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import SharedModule from 'app/shared/shared.module';
import { AccountService } from 'app/core/auth/account.service';
import { Account } from 'app/core/auth/account.model';

@Component({
  standalone: true,
  selector: 'jhi-test-page',
  templateUrl: './test-page.component.html',
  styleUrl: './test-page.component.scss',
  imports: [SharedModule, RouterModule],
})
export default class TestComponent implements OnInit, OnDestroy {
  account = signal<Account | null>(null); //

  private readonly destroy$ = new Subject<void>();

  private accountService = inject(AccountService);
  // private router = inject(Router);

  ngOnInit(): void {
    this.accountService
      .getAuthenticationState()
      .pipe(takeUntil(this.destroy$))
      .subscribe(account => this.account.set(account));
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService]
    });
    service = TestBed.inject(UserService);
  });

  it('should login the user', async () => {
    expect(service.userLogin).toBeTruthy();
  })

  it('should get list of users', async () => {
    expect(service.getListOfUser).toBeTruthy();
  });

  it('should get userinfo by email', async () => {
    expect(service.getUserByEmail).toBeTruthy();
  })

  it('should get userinfo by username', async () => {
    expect(service.getUserByUsername).toBeTruthy();
  })

  it('should get userinfo by username', async () => {
    expect(service.getUserByUsername).toBeTruthy();
  })

  it('should check user login session', async () => {
    expect(service.checkSession).toBeTruthy();
  })

  it('should log out the user', async () => {
    expect(service.logout).toBeTruthy();
  })

  it('should create a new user', async () => {
    expect(service.createNew).toBeTruthy();
  })

  it('should reset user password', async () => {
    expect(service.resetPassword).toBeTruthy();
  })

  it('should send a forgot user password email', async () => {
    expect(service.forgotPassword).toBeTruthy();
  })

  it('should edit user info', async () => {
    expect(service.editProfile).toBeTruthy();
  })
  
});

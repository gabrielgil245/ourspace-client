import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { UserInteractionComponent } from './user-interaction.component';
import { DebugElement } from '@angular/core';
import { GetAllLikesByPostService } from 'src/app/services/get-all-likes-by-post/get-all-likes-by-post.service';
import { of } from 'rxjs';

describe('UserInteractionComponent', () => {
  let component: UserInteractionComponent;
  let fixture: ComponentFixture<UserInteractionComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[ HttpClientTestingModule ],
      declarations: [ UserInteractionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInteractionComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  /* it('should call getAll and return array of Likes', fakeAsync(() => {
    let getLikesService = fixture.debugElement.injector.get(GetAllLikesByPostService)

    spyOn(getLikesService, "getAll").and.callFake(() => {
      return of({
          success: true,
          message: "Listing likes belonging to a post",
          object: { 0: {
            likeId: 1,
            user: {
              userId: 1
            },
            post: {
              postId: 1
            }
          }
          }
      })
    })

    component.getAllLikesForPost;
    expect(component.totalLikes).toEqual(1)
  }
))
*/
})
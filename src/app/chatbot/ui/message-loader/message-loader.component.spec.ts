import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageLoaderComponent } from './message-loader.component';

describe('MessageLoaderComponent', () => {
  let component: MessageLoaderComponent;
  let fixture: ComponentFixture<MessageLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessageLoaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MessageLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
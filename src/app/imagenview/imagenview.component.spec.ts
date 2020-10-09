import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenviewComponent } from './imagenview.component';

describe('ImagenviewComponent', () => {
  let component: ImagenviewComponent;
  let fixture: ComponentFixture<ImagenviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagenviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagenviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

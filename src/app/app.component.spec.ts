import { TestBed } from '@angular/core/testing'
import { HttpTestingController } from '@angular/common/http/testing'
import { AppComponent } from './app.component'

import { NoopAnimationsModule } from '@angular/platform-browser/animations'

import { NGXLogger } from 'ngx-logger'
import { NGXLoggerMock } from 'ngx-logger/testing'
import { APP_CONFIG, AppConfig } from './app-config.module'

const TEST_DIRECTIVES = [AppComponent]

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoopAnimationsModule],
      declarations: TEST_DIRECTIVES,
      providers: [
        { provide: NGXLogger, useClass: NGXLoggerMock },
        { provide: APP_CONFIG, useClass: AppConfig },
        HttpTestingController,
      ],
    }).compileComponents()
    TestBed.inject(HttpTestingController)
  })

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.componentInstance
    expect(app).toBeTruthy()
  })

  it('should have as title "frontend"', () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.componentInstance
    expect(app.title).toEqual('frontend')
  })

  it('should render properly (not logged in)', () => {
    const fixture = TestBed.createComponent(AppComponent)
    fixture.detectChanges()
    const compiled = fixture.nativeElement
    expect(compiled).toMatchSnapshot()
  })
})

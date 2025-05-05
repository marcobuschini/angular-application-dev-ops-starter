import { TestBed } from '@angular/core/testing'
import { HttpTestingController } from '@angular/common/http/testing'
import { AppComponent } from './app.component'

import { NoopAnimationsModule } from '@angular/platform-browser/animations'

import { NGXLogger } from 'ngx-logger'
import { NGXLoggerMock } from 'ngx-logger/testing'
import { APP_CONFIG, AppConfig } from './app-config.module'
import { DebugElement } from '@angular/core'
import { By } from '@angular/platform-browser'

import { expect, jest } from '@jest/globals'

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoopAnimationsModule, AppComponent],
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

  it('should render properly', () => {
    const fixture = TestBed.createComponent(AppComponent)
    fixture.detectChanges()
    const compiled = fixture.nativeElement
    expect(compiled).toMatchSnapshot()
  })

  it('should display the OK snackbar', () => {
    const fixture = TestBed.createComponent(AppComponent)
    const debug: DebugElement = fixture.debugElement
    const buttonsDev = debug.query(By.css('button'))
    const okButton: HTMLButtonElement = buttonsDev.children[0].nativeElement
    const cancelButton: HTMLButtonElement = buttonsDev.children[1].nativeElement

    const component = fixture.componentInstance
    const snackbarSpy = jest.spyOn(component.snackbar, 'open')

    okButton.click()
    expect(snackbarSpy).toHaveBeenCalledTimes(1)

    cancelButton.click()
    expect(snackbarSpy).toHaveBeenCalledTimes(2)
  })
})

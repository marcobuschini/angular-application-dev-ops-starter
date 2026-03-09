import { ComponentFixture, TestBed } from '@angular/core/testing'
import { AppComponent } from './app.component'

import { describe, beforeEach, expect, it, vi } from 'vitest'

import { HarnessLoader } from '@angular/cdk/testing'
import { MatButtonHarness } from '@angular/material/button/testing'
import { MatCardHarness } from '@angular/material/card/testing'
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { MatSnackBarModule } from '@angular/material/snack-bar'

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>
  let component: AppComponent
  let loader: HarnessLoader

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        AppComponent,
        MatButtonModule,
        MatCardModule,
        MatSnackBarModule,
      ],
    })
    fixture = TestBed.createComponent(AppComponent)
    component = fixture.componentInstance
    loader = TestbedHarnessEnvironment.loader(fixture)
    fixture.detectChanges()
  })

  it('should create the app', () => {
    expect(component).toBeDefined()
  })

  it('should have the title "frontend"', () => {
    expect(component.title).toEqual('frontend')
  })

  it('should render the main card content properly', async () => {
    const mainCard = await loader.getHarness(MatCardHarness)
    expect(await mainCard.getTitleText()).toEqual('Welcome, developers!')
    expect(await mainCard.getText()).toContain(
      "Hi, I'm here to help you live memorable experiences!"
    )
  })

  describe('action buttons', () => {
    it.each([{ buttonText: 'Ok' }, { buttonText: 'Cancel' }])(
      'should display a snackbar when the "$buttonText" button is clicked',
      async ({ buttonText }) => {
        const snackbarSpy = vi.spyOn(component.snackbar, 'open')
        const button = await loader.getHarness(
          MatButtonHarness.with({ text: buttonText })
        )

        await button.click()
        expect(snackbarSpy).toHaveBeenCalledTimes(1)
      }
    )
  })
})

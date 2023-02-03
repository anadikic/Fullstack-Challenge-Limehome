import { ModuleWithProviders, NgModule } from '@angular/core'
import { HeaderModule } from './modules/header'

const MODULES = [HeaderModule]

@NgModule({
  imports: [...MODULES],
  exports: [...MODULES],
})
export class PresentationUiModule {
  static forRoot(): ModuleWithProviders<PresentationUiModule> {
    return {
      ngModule: PresentationUiModule,
    }
  }
}

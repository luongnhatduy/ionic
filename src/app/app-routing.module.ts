import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./login/login.module").then(m => m.LoginModule)
  },
  {
    path: "signUp",
    loadChildren: () =>
      import("./signup/signup.module").then(m => m.SignupModule)
  },
  {
    path: "",
    loadChildren: () => import("./tabs/tabs.module").then(m => m.TabsPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

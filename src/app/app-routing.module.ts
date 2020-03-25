import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { 
  AuthGuardService as AuthGuard 
} from './auth/auth-guard.service';
const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./login/login.module").then(m => m.LoginModule),
    canActivate: [AuthGuard]
  },
  {
    path: "signUp",
    loadChildren: () =>
      import("./signup/signup.module").then(m => m.SignupModule)
  },
  {
    path: "tab",
    loadChildren: () => import("./tabs/tabs.module").then(m => m.TabsPageModule) 

  },
  {
    path: "shopDetail",
    loadChildren: () =>
      import("./component/shop-detail/shop-detail.module").then(
        m => m.ShopDetailComponentModule
      )
  },
  {
    path: "historyPurchased",
    loadChildren: () =>
      import("./tab4/history-purchased/history-purchased.module").then(
        m => m.HistoryPurchasedModule
      )
  },
  {
    path: "coupon",
    loadChildren: () =>
      import("./component/coupon/coupon.module").then(m => m.CouponModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

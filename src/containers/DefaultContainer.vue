<template>
  <div class="app">
    <AppHeader fixed>
      <SidebarToggler class="d-lg-none" display="md" mobile />
      <b-link class="navbar-brand" to="#">
        <img class="navbar-brand-full" src="/public/img/brand/logo.svg" width="89" height="25" alt="CoreUI Logo">
        <img class="navbar-brand-minimized" src="/public/img/brand/sygnet.svg" width="30" height="30" alt="CoreUI Logo">
      </b-link>
      <SidebarToggler class="d-md-down-none" display="lg" />
      <b-navbar-nav class="d-md-down-none">
        <!--<b-nav-item class="px-3" to="/dashboard">Dashboard</b-nav-item>-->
        <!--<b-nav-item class="px-3" to="/users" exact>Users</b-nav-item>-->
        <!--<b-nav-item class="px-3">Settings</b-nav-item>-->
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item class="px-3" to="/users" >
          <b-button size="sm" variant="spotify" class="btn-brand"><i class="fa fa-spotify"></i><span>资源入住</span></b-button>
        </b-nav-item>
        <b-nav-item class="px-3" to="/users" >
          <b-button size="sm" variant="flickr" class="btn-brand"><i class="fa fa-flickr"></i><span>订单咨询</span></b-button>
        </b-nav-item>
        <b-nav-item class="d-none d-lg-block">
          <DefaultHeaderDropdownNotif/>
        </b-nav-item>
        <!--<b-nav-item class="d-md-down-none">-->
          <!--<DefaultHeaderDropdownTasks/>-->
        <!--</b-nav-item>-->
        <!--<b-nav-item class="d-md-down-none">-->
          <!--<DefaultHeaderDropdownMssgs/>-->
        <!--</b-nav-item>-->
        <!--<b-nav-item class="d-md-down-none">-->
          <!--<DefaultHeaderDropdown/>-->
        <!--</b-nav-item>-->
        <DefaultHeaderDropdownAccnt/>
      </b-navbar-nav>
      <AsideToggler class="d-none d-lg-block" />
      <!--<AsideToggler class="d-lg-block" mobile />-->
    </AppHeader>
    <div class="app-body">
      <AppSidebar fixed>
        <SidebarHeader/>
        <SidebarForm/>
        <SidebarNav :navItems="nav"></SidebarNav>
        <SidebarFooter/>
        <SidebarMinimizer/>
      </AppSidebar>
      <main class="main">
        <Breadcrumb :list="list"/>
        <div class="container-fluid">
          <router-view></router-view>
        </div>
      </main>
      <AppAside fixed>
        <!--aside-->
        <DefaultAside/>
      </AppAside>
    </div>
    <TheFooter>
      <!--footer-->
      <div>
        <a href="https://coreui.io">共享媒介</a>
        <span class="ml-1">&copy; 2018 creativeLabs.</span>
      </div>
      <div class="ml-auto">
        <span class="mr-1">Powered by</span>
        <a href="https://coreui.io">共享媒介</a>
      </div>
    </TheFooter>
  </div>
</template>
<style>
  .app-header{
    background: #15c1d7;
  }
  .sidebar {
    background: #f4f4f4;
    color: #666666;
  }
  .sidebar .nav-link{
    color: #666666;
  }
  .sidebar .nav-link.active{
    background: transparent;
  }
  .sidebar .nav-dropdown .nav-dropdown-items a  {
    padding-left: 2rem;
  }
</style>
<script>
import nav from '@/_nav'
import { Header as AppHeader, SidebarToggler, Sidebar as AppSidebar, SidebarFooter, SidebarForm, SidebarHeader, SidebarMinimizer, SidebarNav, Aside as AppAside, AsideToggler, Footer as TheFooter, Breadcrumb } from '@coreui/vue'
import DefaultAside from './DefaultAside'
import DefaultHeaderDropdown from './DefaultHeaderDropdown'
import DefaultHeaderDropdownNotif from './DefaultHeaderDropdownNotif'
import DefaultHeaderDropdownAccnt from './DefaultHeaderDropdownAccnt'
import DefaultHeaderDropdownMssgs from './DefaultHeaderDropdownMssgs'
import DefaultHeaderDropdownTasks from './DefaultHeaderDropdownTasks'

export default {
  name: 'DefaultContainer',
  components: {
    AsideToggler,
    AppHeader,
    AppSidebar,
    AppAside,
    TheFooter,
    Breadcrumb,
    DefaultAside,
    DefaultHeaderDropdown,
    DefaultHeaderDropdownMssgs,
    DefaultHeaderDropdownNotif,
    DefaultHeaderDropdownTasks,
    DefaultHeaderDropdownAccnt,
    SidebarForm,
    SidebarFooter,
    SidebarToggler,
    SidebarHeader,
    SidebarNav,
    SidebarMinimizer
  },
  data () {
    return {
      nav: nav.items
    }
  },
  computed: {
    name () {
      return this.$route.name
    },
    list () {
      return this.$route.matched.filter((route) => route.name || route.meta.label )
    }
  }
}
</script>

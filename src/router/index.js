import Vue from 'vue'
import Router from 'vue-router'

// Containers
const DefaultContainer = () => import('@/containers/DefaultContainer')

// Views
const Dashboard = () => import('@/views/Dashboard')

const Colors = () => import('@/views/theme/Colors')
const Typography = () => import('@/views/theme/Typography')

const Charts = () => import('@/views/Charts')
const Widgets = () => import('@/views/Widgets')

// Views - Components
const Cards = () => import('@/views/base/Cards')
const Switches = () => import('@/views/base/Switches')
const Tabs = () => import('@/views/base/Tabs')
const Breadcrumbs = () => import('@/views/base/Breadcrumbs')
const Carousels = () => import('@/views/base/Carousels')
const Collapses = () => import('@/views/base/Collapses')
const Jumbotrons = () => import('@/views/base/Jumbotrons')
const ListGroups = () => import('@/views/base/ListGroups')
const Navs = () => import('@/views/base/Navs')
const Navbars = () => import('@/views/base/Navbars')
const Paginations = () => import('@/views/base/Paginations')
const Popovers = () => import('@/views/base/Popovers')
const ProgressBars = () => import('@/views/base/ProgressBars')
const Tooltips = () => import('@/views/base/Tooltips')

// Views - Buttons
const StandardButtons = () => import('@/views/buttons/StandardButtons')
const ButtonGroups = () => import('@/views/buttons/ButtonGroups')
const Dropdowns = () => import('@/views/buttons/Dropdowns')
const BrandButtons = () => import('@/views/buttons/BrandButtons')

// Views - Editors
const TextEditors = () => import('@/views/editors/TextEditors')
const CodeEditors = () => import('@/views/editors/CodeEditors')

// Views - Forms
const BasicForms = () => import('@/views/forms/BasicForms')
const AdvancedForms = () => import('@/views/forms/AdvancedForms')
const ValidationForms = () => import('@/views/forms/ValidationForms')

// Views GoogleMaps
const GoogleMaps = () => import('@/views/GoogleMaps')

// Views - Icons
const Flags = () => import('@/views/icons/Flags')
const FontAwesome = () => import('@/views/icons/FontAwesome')
const SimpleLineIcons = () => import('@/views/icons/SimpleLineIcons')
const CoreUIIcons = () => import('@/views/icons/CoreUIIcons')

// Views - Notifications
const Alerts = () => import('@/views/notifications/Alerts')
const Badges = () => import('@/views/notifications/Badges')
const Modals = () => import('@/views/notifications/Modals')
const Toastr = () => import('@/views/notifications/Toastr')

// Views - Tables
const Tables = () => import('@/views/tables/Tables')
const DataTable = () => import('@/views/tables/DataTable')

// Views - Pages
const Page404 = () => import('@/views/pages/Page404')
const Page500 = () => import('@/views/pages/Page500')
const Login = () => import('@/views/pages/Login')
const Register = () => import('@/views/pages/Register')

// Users
const Users = () => import('@/views/users/Users')
const User = () => import('@/views/users/User')

// Plugins
const Draggable = () => import('@/views/plugins/Draggable')
const Calendar = () => import('@/views/plugins/Calendar')

// Views - UI Kits
const Invoice = () => import('@/views/apps/invoicing/Invoice')
const Compose = () => import('@/views/apps/email/Compose')
const Inbox = () => import('@/views/apps/email/Inbox')
const Message = () => import('@/views/apps/email/Message')


//web views
const RescourceManager = () => import('@/views/web/Tables')
const CompanyInfo = () => import('@/views/web/companyMgr/CompanyInfo')
const PublishResource = () => import('@/views/web/publishResource/publishResource')
const ArticleCreate = () => import('@/views/web/articleMgr/ArticleCreate')
const ArticleList = () => import('@/views/web/articleMgr/ArticleList')
const AccountInfo = () => import('@/views/web/accountMgr/AccountInfo')
const AccountChangeList = () => import('@/views/web/accountMgr/AccountChangeList')
const EmployeeList = () => import('@/views/web/employeeMgr/EmployeeList')
const OrderList = () => import('@/views/web/orderMgr/OrderList')
const NewsOrderList = () => import('@/views/web/orderMgr/NewsOrderList')
const WechatOrderList = () => import('@/views/web/orderMgr/WechatOrderList')
const MideaOrderList = () => import('@/views/web/orderMgr/MideaOrderList')
const FinishOrderList = () => import('@/views/web/orderMgr/FinishOrderList')
const ProblemOrderList = () => import('@/views/web/orderMgr/ProblemOrderList')
const WaterBill = () => import('@/views/web/accountMgrZys/WaterBill')
const WithdrawCash = () => import('@/views/web/accountMgrZys/WithdrawCash')
const WithdrawOperate = () => import('@/views/web/accountMgrZys/WithdrawOperate')
const AccountSetting = () => import('@/views/web/accountMgrZys/AccountSetting')
const NewResource = () => import('@/views/web/resourceMgr/NewResource')
const MediaAdd = () => import('@/views/web/resourceMgr/MediaAdd')
const WeChatAdd = () => import('@/views/web/resourceMgr/WeChatAdd')


Vue.use(Router)

const  routes=[
    {
      path: '/',
      redirect: '/dashboard',
      name: 'Home',
      component: DefaultContainer,
      children: [
        {
          path: 'dashboard',
          name: '首页',
          component: Dashboard
        },
        {
          path: 'companyMgr',
          redirect: '/companyMgr/companyInfo',
          name: '公司信息管理',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'companyInfo',
              name: '公司信息',
              component: CompanyInfo,
              meta: {
                requireAuth: false,
              }
            }
          ]
        },
        {
          path: 'accountMgr',
          redirect: '/accountMgr/accountInfo',
          name: '账户管理',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'accountInfo',
              name: '账户信息',
              component: AccountInfo,
              meta: {
                requireAuth: false,
              }
            },
            {
              path: 'accountChangeList',
              name: '账户变更信息',
              component: AccountChangeList,
              meta: {
                requireAuth: false,
              }
            }
          ]
        },
        {
          path: 'employeeMgr',
          redirect: '/employeeMgr/employeeList',
          name: '账户管理',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'employeeList',
              name: '账户信息',
              component: EmployeeList,
              meta: {
                requireAuth: false,
              }
            }
          ]
        },
        {
          path: 'resourceMgr',
          redirect: '/resourceMgr/newResource',
          name: '资源管理',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'newResource',
              name: '资源添加',
              redirect: '/resourceMgr/newResource/resourceAdd',
              component: {
                render (c) { return c('router-view') }
              },
              meta: {
                requireAuth: false,
              },
              children: [
                {
                  path: 'resourceAdd',
                  name: '资源添加',
                  component: NewResource,
                  meta: {
                    requireAuth: false,
                  }
                },
                {
                  path: 'mediaAdd',
                  name: '自媒体添加',
                  component: MediaAdd,
                  meta: {
                    requireAuth: false,
                  }
                },
                {
                  path: 'weChatAdd',
                  name: '微信公众平台添加',
                  component: WeChatAdd,
                  meta: {
                    requireAuth: false,
                  }
                }
              ]
            }
          ]
        },
        {
          path: 'accountMgrZys',
          redirect: '/accountMgrZys/waterBill',
          name: '账户管理',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'waterBill',
              name: '流水账单',
              component: WaterBill,
              meta: {
                requireAuth: false,
              }
            },
            {
              path: 'withdrawCash',
              name: '提现',
              redirect: '/accountMgrZys/withdrawCash/cash',
              component: {
                render (c) { return c('router-view') }
              },
              meta: {
                requireAuth: false,
              },
              children: [
                {
                  path: 'cash',
                  name: '提现',
                  component: WithdrawCash,
                  meta: {
                    requireAuth: false,
                  }
                },
                {
                  path: 'operate',
                  name: '提现操作',
                  component: WithdrawOperate,
                  meta: {
                    requireAuth: false,
                  }
                }
              ]
            },
            {
              path: 'accountSetting',
              name: '账户设置',
              component: AccountSetting,
              meta: {
                requireAuth: false,
              }
            }
          ]
        },
        {
          path: 'orderMgr',
          redirect: '/orderMgr/orderList',
          name: '订单管理',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'orderList',
              name: '订单列表',
              component: OrderList,
              meta: {
                requireAuth: false,
              }
            },
            {
              path: 'newOrder',
              name: '新订单',
              redirect: '/orderMgr/newOrder/news',
              component: {
                render (c) { return c('router-view') }
              },
              children: [
                {
                  path: 'news',
                  name: '新闻订单',
                  component: NewsOrderList,
                  meta: {
                    requireAuth: false,
                  }
                },
                {
                  path: 'mideas',
                  name: '自媒体订单',
                  component: MideaOrderList,
                  meta: {
                    requireAuth: false,
                  }
                },
                {
                  path: 'wechat',
                  name: '微信公众号订单',
                  component: WechatOrderList,
                  meta: {
                    requireAuth: false,
                  }
                }]
            },
            {
              path: 'problemOrder',
              name: '问题订单',
              component: ProblemOrderList,
              meta: {
                requireAuth: false,
              }
            },
            {
              path: 'finishOrder',
              name: '已完成订单',
              component: FinishOrderList,
              meta: {
                requireAuth: false,
              }
            }
          ]
        },
        {
          path: 'articleMgr',
          redirect: '/articleMgr/articleCreate',
          name: '文章管理',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'articleCreate',
              name: '文章发布',
              component: ArticleCreate,
              meta: {
                requireAuth: false,
              }
            },{
              path: 'articleList',
              name: '文章列表',
              component: ArticleList,
              meta: {
                requireAuth: false,
              }
            }
          ]
        },
        {
          path: 'publishResource',
          name: '任务发布',
          component: PublishResource,
          meta: {
            requireAuth: false,
          }
        },
        {
          path: 'theme',
          redirect: '/theme/colors',
          name: 'Theme',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'colors',
              name: 'Colors',
              component: Colors,
              meta: {
                requireAuth: false,  // 添加该字段，true表示进入这个路由是需要登录的
              }
            },
            {
              path: 'typography',
              name: 'Typography',
              component: Typography
            }
          ]
        },
        {
          path: 'charts',
          name: 'Charts',
          component: Charts
        },
        {
          path: 'widgets',
          name: 'Widgets',
          component: Widgets
        },
        {
          path: 'users',
          meta: { label: 'Users'},
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: '',
              component: Users,
            },
            {
              path: ':id',
              meta: { label: 'User Details'},
              name: 'User',
              component: User,
            },
          ]
        },
        {
          path: 'base',
          redirect: '/base/cards',
          name: 'Base',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'breadcrumbs',
              name: 'Breadcrumbs',
              component: Breadcrumbs
            },
            {
              path: 'cards',
              name: 'Cards',
              component: Cards
            },
            {
              path: 'carousels',
              name: 'Carousels',
              component: Carousels
            },
            {
              path: 'collapses',
              name: 'Collapses',
              component: Collapses
            },
            {
              path: 'jumbotrons',
              name: 'Jumbotrons',
              component: Jumbotrons
            },
            {
              path: 'list-groups',
              name: 'List Groups',
              component: ListGroups
            },
            {
              path: 'navs',
              name: 'Navs',
              component: Navs
            },
            {
              path: 'navbars',
              name: 'Navbars',
              component: Navbars
            },
            {
              path: 'paginations',
              name: 'Paginations',
              component: Paginations
            },
            {
              path: 'popovers',
              name: 'Popovers',
              component: Popovers
            },
            {
              path: 'progress-bars',
              name: 'Progress Bars',
              component: ProgressBars
            },
            {
              path: 'switches',
              name: 'Switches',
              component: Switches
            },
            {
              path: 'tabs',
              name: 'Tabs',
              component: Tabs
            },
            {
              path: 'tooltips',
              name: 'Tooltips',
              component: Tooltips
            }
          ]
        },
        {
          path: 'buttons',
          redirect: '/buttons/standard-buttons',
          name: 'Buttons',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'standard-buttons',
              name: 'Standard Buttons',
              component: StandardButtons
            },
            {
              path: 'button-groups',
              name: 'Button Groups',
              component: ButtonGroups
            },
            {
              path: 'dropdowns',
              name: 'Dropdowns',
              component: Dropdowns
            },
            {
              path: 'brand-buttons',
              name: 'Brand Buttons',
              component: BrandButtons
            }
          ]
        },
        {
          path: 'editors',
          redirect: '/editors/text-editors',
          name: 'Editors',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'text-editors',
              name: 'Text Editors',
              component: TextEditors
            },
            {
              path: 'code-editors',
              name: 'Code Editors',
              component: CodeEditors
            }
          ]
        },
        {
          path: 'forms',
          redirect: '/forms/basic-forms',
          name: 'Forms',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'basic-forms',
              name: 'Basic Forms',
              component: BasicForms
            },
            {
              path: 'advanced-forms',
              name: 'Advanced Forms',
              component: AdvancedForms
            },
            {
              path: 'validation-forms',
              name: 'Form Validation',
              component: ValidationForms
            }
          ]
        },
        {
          path: 'google-maps',
          name: 'Google Maps',
          component: GoogleMaps
        },
        {
          path: 'icons',
          redirect: '/icons/font-awesome',
          name: 'Icons',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'coreui-icons',
              name: 'CoreUI Icons',
              component: CoreUIIcons
            },
            {
              path: 'flags',
              name: 'Flags',
              component: Flags
            },
            {
              path: 'font-awesome',
              name: 'Font Awesome',
              component: FontAwesome
            },
            {
              path: 'simple-line-icons',
              name: 'Simple Line Icons',
              component: SimpleLineIcons
            }
          ]
        },
        {
          path: 'notifications',
          redirect: '/notifications/alerts',
          name: 'Notifications',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'alerts',
              name: 'Alerts',
              component: Alerts
            },
            {
              path: 'badges',
              name: 'Badges',
              component: Badges
            },
            {
              path: 'modals',
              name: 'Modals',
              component: Modals
            },
            {
              path: 'toastr',
              name: 'Toastr',
              component: Toastr
            }
          ]
        },
        {
          path: 'plugins',
          redirect: '/plugins/draggable',
          name: 'Plugins',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'draggable',
              name: 'Draggable Cards',
              component: Draggable
            },
            {
              path: 'calendar',
              name: 'Calendar',
              component: Calendar
            }
          ]
        },
        {
          path: 'tables',
          redirect: '/tables/tables',
          name: 'Tables',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'tables',
              name: 'Simple Tables',
              component: Tables
            },
            {
              path: 'data-table',
              name: 'Data Table',
              component: DataTable
            },
          ]
        },
        {
          path: 'apps',
          name: 'Apps',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'invoicing',
              redirect: '/apps/invoicing/invoice',
              name: 'Invoicing',
              component: {
                render (c) { return c('router-view') }
              },
              children: [
                {
                  path: 'invoice',
                  name: 'Invoice',
                  component: Invoice
                }
              ]
            },
            {
              path: 'email',
              redirect: '/apps/email/inbox',
              name: 'Email',
              component: {
                render (c) { return c('router-view') }
              },
              children: [
                {
                  path: 'compose',
                  name: 'Compose',
                  component: Compose
                },
                {
                  path: 'inbox',
                  name: 'Inbox',
                  component: Inbox
                },
                {
                  path: 'message',
                  name: 'Message',
                  component: Message
                }
              ]
            }
          ]
        },
        {
          path: '/rescourceManager',
          name: '资源管理',
          component: RescourceManager
        }
      ]
    },
    {
      path: '/pages',
      redirect: '/pages/404',
      name: 'Pages',
      component: {
        render (c) { return c('router-view') }
      },
      children: [
        {
          path: '404',
          name: 'Page404',
          component: Page404
        },
        {
          path: '500',
          name: 'Page500',
          component: Page500
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }

  ]


const router = new Router({
  // mode: 'history',
  mode: 'history', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes
});

// 全局导航钩子
router.beforeEach((to, from, next) => {

  if (to.meta.requireAuth) {
    let username = localStorage.getItem('ms_username');
    console.log(username);
    if(!isEmptyObject(username)) {
      next();
    }
    else {
      next({
        path: '/login',
        query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
      });
    }
  }
  else {
    next();
  }
});

//判断object是否为空
function isEmptyObject(obj) {
  for (var key in obj) {
    return false;
  }
  return true;
}



export default router;

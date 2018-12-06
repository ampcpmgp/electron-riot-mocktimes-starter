import 'riot-route/lib/tag'
import './parts/header'
import './pages/default'
import './pages/not-found'

<app-root>
  <parts-header
    handle-menu-click="{uiAction.addCount}"
    click-count="{ui.clickCount}"
  ></parts-header>

  <router>
    <route path="default">
      <pages-default></pages-default>
    </route>

    <route path="..">
      <pages-not-found></pages-not-found>
    </route>
  </router>

  <script>
    import Mixin from './mixin'
    this.mixin(Mixin)
  </script>
</app-root>

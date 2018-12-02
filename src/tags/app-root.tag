import 'riot-route/lib/tag'
import './parts/header'
import './pages/default'
import './pages/not-found'

<app-root>
  <parts-header></parts-header>

  <router>
    <route path="default">
      <pages-default></pages-default>
    </route>

    <route path="..">
      <pages-not-found></pages-not-found>
    </route>
  </router>
</app-root>

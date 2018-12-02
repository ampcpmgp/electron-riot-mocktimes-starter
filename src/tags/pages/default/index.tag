<pages-default>
  <h2>{title}</h2>
  <div>
    {clickCount}
  </div>
  <div>
    API: {apiData}
  </div>
  <style type="less">
    :scope {
      display: flex;
      flex-direction: column;
      border: 1px solid;
    }

    > img {
      width: 200px;
    }

    > h2 {
      color: blue;
    }
  </style>

  <script>
    import Mixin from './mixin.js'

    this.mixin(Mixin)
  </script>
</pages-default>

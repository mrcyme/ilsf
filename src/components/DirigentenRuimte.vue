<template>
<div>
<h1>
  {{ $t('dirigent') }}
</h1>

<div class="row">
<div class="column"></div>
<p>{{$t('explain_dirigent')}}</p>
<div class="column"></div>
<a href="https://semiconductor.withgoogle.com/">{{ $t('click')}}</a>
</div>



</div>
</template>

<script>
  export default {
    name: 'DirigentenRuimte',
  }
</script>

<style>
  p {
    margin-left: 20%;
    margin-right: 20%;
    }
  div {
    margin-bottom:0%
  }

</style>

<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <!-- chain filter local & global -->
                <p>{{ text | toUppercase | to-lowercase }}</p>
                <hr>
                <app-list></app-list>
            </div>
        </div>
    </div>
</template>

<script>
import List from './List.vue';

export default {
    data() {
        return {
            text: 'Hello there!',
        }
    },
    // 출력 결과만 바꾼다
    filters: {
        toUppercase(value) {
            return value.toUpperCase();
        }
    },
    components: {
        appList : List
    }
}
</script>

<style>

</style>

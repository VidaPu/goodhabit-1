<template>
    <div class="date-ct">
        <div class="ct">
            <div class="calendar clearfix">
                <div class="card pre-month">往前</div>
                <div class="card cur-month">
                    <div v-for="date in month" class="date">
                        <p class="habit" v-for="h in date.habit">
                            <span v-bind:class="[h.status == 2 ? 'consolidate' : 'becoming']">{{h.name}}</span>
                        </p>
                    </div>
                </div>
                <div class="card next-month">新建</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'date',
        data() {
            return {
                month: [{
                    habit: [{
                        name: 'bbb',
                        status: 1
                    }]
                },{
                    habit: [{
                        name: 'aaa',
                        status: 1
                    },{
                        name: 'bbb',
                        status: 1
                    }]
                },{
                    habit: [{
                        name: 'aaa',
                        status: 2
                    }]
                },{
                    habit: [{
                        name: 'bbb',
                        status: 1
                    }]
                },{
                    habit: [{
                        name: 'bbb',
                        status: 1
                    }]
                },{
                    habit: [{
                        name: 'bbb',
                        status: 1
                    }]
                },{
                    habit: [{
                        name: 'aaa',
                        status: 1
                    },{
                        name: 'bbb',
                        status: 1
                    }]
                },{
                    habit: [{
                        name: 'aaa',
                        status: 2
                    }]
                },{
                    habit: [{
                        name: 'bbb',
                        status: 1
                    }]
                },{
                    habit: []
                }]
            }
        }
    }
</script>

<style scoped>
    .date-ct{
        overflow: hidden;
        height: 12rem;
    }
    .ct{
        perspective: 8rem;
        position: relative;
    }
    .calendar{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: 0 auto;
        width: 6.9rem;
        height: 12rem;
        border: solid 1px #999;
        -webkit-transform-style: preserve-3d;
        -moz-transform-style: preserve-3d;
        -ms-transform-style: preserve-3d;
        transform-style: preserve-3d;
    }
    .card{
        position: absolute;
        left: 0;
        right: 0;
        margin: auto;
        width: 6.3rem;
        height: 8rem;
        border-radius: .08rem;
    }
    .pre-month{
        bottom: 8rem;
        background-color: #50d495;
        transform: rotateX(40deg) translateZ(120px) scale(.67);
    }
    .cur-month{
        top: 2rem;
        background-color: #bcb2d4;
    }
    .next-month {
        top: 10rem;
        background-color: #d474ca;
        transform: rotateX(340deg) translateZ(-125px) scale(.98);
    }
    .date{
        box-sizing: border-box;
        float: left;
        width: 20%;
        height: 1rem;
        border: solid 1px #bbb;
        border-radius: .1rem;
    }
    .habit{
        display: block;
        margin: 0.1rem;
        padding: 0;
        font-weight: bold;
    }
    .becoming{
        border: solid 1px #95ffca;
        -webkit-border-radius: 4px;
        -moz-border-radius: 4px;
        border-radius: 4px;
    }
    .becoming:before {
        display: inline-block;
        content: '形成';
        background-color: #95ffca;
    }
    .consolidate{
        border: solid 1px #ffe8c6;
        -webkit-border-radius: 4px;
        -moz-border-radius: 4px;
        border-radius: 4px;
    }
    .consolidate:before {
        display: inline-block;
        content: '巩固';
        background-color: #ffe8c6;
    }
</style>
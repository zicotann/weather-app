<template>
    <div class="card">
        <div class="card__row">
            <h2 class="location active">
                <span class="location__current-tag">My Location</span> 
                <span class="location__name">Bangsar South</span>
            </h2>
            <span class="temp">24º</span>
        </div>
        <div class="card__row">
            <span class="condition">Moderate Rain</span>
            <span>H:24º L:24º</span>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss">

.card {
    background-color: #e8e8e8;
    border-radius: 10px;
    padding: 8px;
    gap: 16px;
    display: flex;
    flex-direction: column;

    &__row {
        display: flex;
        justify-content: space-between;

        .location{
            font-size: 24px;
            font-weight: bold;

            &.active {
                .location__current-tag{
                    display: block;
                }

                .location__name{
                    font-size: 16px;
                }
            }

            .location__current-tag{
                display: none;
            }

            .location__name{
                display: block;
                font-size: 24px;
                font-weight: normal;
            }
        }

        .temp{
            font-size: 48px;
            font-weight: thin;
        }

        .condition{
            padding-right: 6px;
        }
    }
}

</style>
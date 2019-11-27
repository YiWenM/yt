<template>
    <div>
        <el-form :inline="true" :model="search">
            <el-form-item v-for="item in config" :key="item.key">

                <el-input
                        v-if="item.type === 'input'"
                        v-model="search[item.key]"
                        :placeholder="`${item.label}`"
                        clearable
                ></el-input>

                <el-select
                        v-if="item.type === 'select'"
                        v-model="search[item.key]"
                        :placeholder="`${item.label}`"
                        filterable
                        clearable
                >
                    <el-option
                            v-for="option in item.options"
                            :key="option.key"
                            :label="option.value"
                            :value="option.key"
                    ></el-option>
                </el-select>
                <el-date-picker
                        v-if="item.type === 'date'"
                        v-model="search[item.key]"
                        type="date"
                        value-format="yyyy-MM-dd"
                        :placeholder="`${item.label}`"
                ></el-date-picker>

                <el-date-picker
                        v-if="item.type === 'range'"
                        v-model="search[item.key]"
                        type="daterange"
                        value-format="yyyy-MM-dd"
                        range-separator="至"
                        :start-placeholder="item.label.split('/')[0] || '开始日期'"
                        :end-placeholder="item.label.split('/')[1] || '结束日期'"
                ></el-date-picker>
            </el-form-item>
            <el-form-item>
                <el-button type="info" @click="searchHandle()" icon="el-icon-search">搜索</el-button>
            </el-form-item>
            <el-form-item>
                <slot />
            </el-form-item>
        </el-form>
    </div>
</template>

<script>

    export default {
        name: 'SearchFile',
        props:{
            config:{
                type:Array,
                default:()=>{return[]},

            }
        },
        data(){
            return{
                search:{}
            }
        },
        methods:{
            searchHandle(){
                this.$emit('search',this.search)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .search-results {
       display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        padding: 10px;
        border-radius: 2px;
        background-color: #eee;

        p {
            width: 70px;
            height: auto;
            margin: 0 10px;
            color: #333;
            font-size: 14px;
            font-weight: 400;
        }

        .results {
            .el-tag {
                margin: 0 4px 4px 4px;
            }
        }
    }
</style>


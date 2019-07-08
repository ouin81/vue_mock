<template>
  <va-box :title="title" theme="box-primary" :isBorder="true" widgetType>
    <div slot="content">
        <va-input-group :data-vv-as="' '" v-validate="'required'" :title="$t('activerecord.attributes.book.name')" name="name" vaId="name" type="text" placeholder="Enter Name" :value="book.name" @input=" value => updateValue(value, 'name')"></va-input-group>
        <small v-if="errors.has('name')" class="errors text-red">{{ errors.first('name') }}</small>
        <va-input-group :data-vv-as="' '" v-validate="'required'"  :title="$t('activerecord.attributes.book.author')" name="author" vaId="author" type="text" placeholder="Enter Author" :value="book.author" @input=" value => updateValue(value, 'author')"></va-input-group>
        <small v-if="errors.has('author')" class="errors text-red">{{ errors.first('author') }}</small>
        <va-radio :data-vv-as="' '" v-validate="'required'"  :realVal="true" :value="book.published" name="published" @change=" value => updateValue(value, 'published')">
            {{$t('activerecord.attributes.book.published')}}
        </va-radio>
        <small v-if="errors.has('published')" class="errors text-red">{{ errors.first('published') }}</small>
        <va-input-group :data-vv-as="' '" v-validate="'required'"  :title="$t('activerecord.attributes.book.published_at')" name="published_at" vaId="published_at" type="date" placeholder="Enter Published at" :value="book.published_at" @input=" value => updateValue(value, 'published_at')"></va-input-group>
        <small v-if="errors.has('published_at')" class="errors text-red">{{ errors.first('published_at') }}</small>
        <va-input-group :title="$t('activerecord.attributes.book.stock')" name="stock" vaId="stock" type="number" placeholder="Enter Stock" :value="book.stock" @input=" value => updateValue(value, 'stock')"></va-input-group>
        <small v-if="errors.has('stock')" class="errors text-red">{{ errors.first('stock') }}</small>
        <va-input-group :title="$t('activerecord.attributes.book.published_by')" name="published_by" vaId="published_by" type="text" placeholder="Enter Published by" :value="book.published_by" @input=" value => updateValue(value, 'published_by')"></va-input-group>
        <small v-if="errors.has('published_by')" class="errors text-red">{{ errors.first('published_by') }}</small>
        <va-input-group :title="$t('activerecord.attributes.book.price')" name="price" vaId="price" type="number" placeholder="Enter Price" :value="book.price" @input=" value => updateValue(value, 'price')"></va-input-group>
        <small v-if="errors.has('price')" class="errors text-red">{{ errors.first('price') }}</small>
        <va-input-group :title="$t('activerecord.attributes.book.comment')" name="comment" vaId="comment" type="text" placeholder="Enter Comment" :value="book.comment" @input=" value => updateValue(value, 'comment')"></va-input-group>
        <small v-if="errors.has('comment')" class="errors text-red">{{ errors.first('comment') }}</small>
    </div>
  </va-box>
</template>
<script>
    import { mapGetters, mapActions } from 'vuex'
    export default {
        name: "book-view-form",
        props: {
            title: {
                type: String,
                default: ""
            }
        },
        //common components are imported at lib/global.js
        components: { },
        methods: {
            ...mapActions('books/books', [
              'updateBook'
            ]),
            updateValue(val, key) {
                this.updateBook({'val': val, 'key': key})
            }
        },
        computed: { 
            ...mapGetters('books/books', [
                'book',
            ])
        },
        watch: { },
        //https://jp.vuejs.org/v2/api/#オプション-ライフサイクルフック
        created() { },
        mounted() { },
        inject: ['$validator'],
        data() {
            return {
            };
        }
    }
</script>

<style scoped>
</style>

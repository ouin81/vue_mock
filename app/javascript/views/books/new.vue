<template>
  <row>
    <column class="col-md-2"></column>
    <column class="col-md-8">
        <book-form :title="$t('views.common.title.new_model',  { model: $t('activerecord.models.book') })"></book-form>
        <va-button :name="$t('views.common.btn.create')" theme="primary" :isBlock="false" @click="create"></va-button>
        <va-button :name="$t('views.common.btn.cancel')" theme="warning" :isBlock="false" align="right" @click="cancel"></va-button>
    </column>
    <column class="col-md-2"></column>
  </row>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    import BookForm from './_form'
    export default {
        name: "book-view-new",
        //common components are imported at lib/global.js
        //import form.vue
        components: {
            'book-form': BookForm
        },
        methods: {
            ...mapActions('books/books', [
              'initBook',
              'createBook',
            ]),

            create() {
                this.$validator.validateAll().then((result) => {
                    console.log(result)
                    if(result) {
                        this.createBook({
                            book: this.book
                        });
                        return;
                    }
                    return result;
                })
            },
            
            cancel() {
                this.$router.push({name: 'BookIndex'});
            }
        },
        computed: {
            ...mapGetters('books/books', [
                'book',
            ])
         },
        watch: { },
        //https://jp.vuejs.org/v2/api/#オプション-ライフサイクルフック
        created () { },
        mounted () {
            this.initBook();
         },
        // beforeRouteLeave (to, from, next) {
        //     const isLeave = window.confirm('Do you really want to leave? you have unsaved changes!')
        //     next(isLeave);
        // },
        provide() {
            return {
                $validator: this.$validator,
            }
        },
        data() {
            return {
            };
        }
    }
</script>

<style scoped>
</style>

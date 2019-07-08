<template>
  <row>
    <va-box theme="box-info" :title="$t('views.common.title.list_models', { model: $t('activerecord.models.book')} )" :isBorder="true" widgetType>
      <va-pagination slot="pagination" :pageIndex="pagination.pageIndex" :totalCount="pagination.totalCount" @click="paging"></va-pagination>
      <div slot="content" class="table-responsive">
        <table class="table table-bordered table-hover dataTable">
          <thead>
            <tr>
              <th>{{$t('activerecord.attributes.book.id')}}</th>
              <th>{{$t('activerecord.attributes.book.name')}}</th>
              <th>{{$t('activerecord.attributes.book.author')}}</th>
              <th>{{$t('activerecord.attributes.book.published')}}</th>
              <th>{{$t('activerecord.attributes.book.published_at')}}</th>
              <th>{{$t('activerecord.attributes.book.stock')}}</th>
              <th>{{$t('activerecord.attributes.book.published_by')}}</th>
              <th>{{$t('activerecord.attributes.book.price')}}</th>
              <th>{{$t('activerecord.attributes.book.comment')}}</th>
            </tr>
          </thead>
          <tbody>
            <router-link tag="tr" :to="{name: 'BookEdit', params: {id: book.id}}" v-for="(book, index) in books" :key="index">
              <td>{{book.id}}</td>
              <td>{{book.name}}</td>
              <td>{{book.author}}</td>
              <td>{{book.published}}</td>
              <td>{{book.published_at}}</td>
              <td>{{book.stock}}</td>
              <td>{{book.published_by}}</td>
              <td>{{book.price}}</td>
              <td>{{book.comment}}</td>
            </router-link>
          </tbody>
        </table>
      </div>
      <div class="box-footer clearfix" slot="footer">
        <router-link :to="{name: 'BookNew'}" class="btn btn-sm btn-info btn-flat pull-left"><i class="fa fa-plus"></i> {{$t('views.common.btn.new_model',  { model: $t('activerecord.models.book') })}}</router-link>
      </div>
    </va-box>
  </row>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    export default {
        name: "book-view-index",
        //common components are imported at lib/global.js
        components: {
        },
        methods: {
            ...mapActions('books/books', [
              'fetchBooks'
            ]),

            paging(val) {
              this.fetchBooks({'page': val});
            }
            
        },
        computed: {
          ...mapGetters('books/books', [
            'books',
            'pagination'
          ])
        },
        watch: { },
        //https://jp.vuejs.org/v2/api/#オプション-ライフサイクルフック
        created () { },
        mounted () { 
          this.fetchBooks();
        },
        data() {
            return {
            };
        }
    };
</script>

<style scoped>
</style>

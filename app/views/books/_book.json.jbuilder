json.extract! book, :id, :name, :author, :published, :published_at, :stock, :published_by, :price, :comment, :created_at, :updated_at
json.url book_url(book, format: :json)

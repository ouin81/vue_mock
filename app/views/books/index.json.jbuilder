json.books @books do |book|
    json.extract! book, :id, :name, :author, :published, :published_at, :stock, :published_by, :price, :comment, :created_at, :updated_at
end
json.totalCount 100
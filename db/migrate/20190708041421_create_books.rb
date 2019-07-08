class CreateBooks < ActiveRecord::Migration[5.2]
  def change
    create_table :books do |t|
      t.string :name
      t.string :author
      t.boolean :published
      t.date :published_at
      t.integer :stock
      t.string :published_by
      t.integer :price
      t.string :comment

      t.timestamps
    end
  end
end

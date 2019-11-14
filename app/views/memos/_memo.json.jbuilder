json.extract! memo, :id, :user, :title, :content, :created_at, :updated_at
json.url memo_url(memo, format: :json)

# README
## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|index: true, null: false, unique: true|
|email|string|null: false|
|user_id|integer|null: false, foreign_key: true|

### Association
- has_many :groups,throught:members
- has_many :messages
- has_many :members

## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|group_name|string|index: true, null: false|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user


## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|body|text|index: true|
|image|string|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user
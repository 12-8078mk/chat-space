# README(chat-spaceのDB設計)
## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|index: true, null: false, unique: true|
|email|string|null: false|

### Association
- has_many :groups,throught:members
- has_many :messages
- has_many :members

## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :groups
- belongs_to :users


## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|body|text|index: true|
|image|string|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- has_many :groups
- mas_many :users


## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|group_name|string|index: true, null: false|

### Association
- belongs_to :group
- belongs_to :user

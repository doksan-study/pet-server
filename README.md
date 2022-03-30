# pet-server




###
Sequelize는 기본적으로 RDB(Relational Database)를 코드 단에서 사용하기 쉽게 해주는 ORM 입니다.
RDB의 1:1, 1:N, N:M의 연관(관계)에 대해서 별도로 알아두는 것이 좋습니다.


## 22.03.30
- migration 부분에서  comment 부분에 외래키 설정하기
- model 부분에서 관계형 매핑해주기
-- post는 comment를 여러개 가지고 있다(1:N관계, hasMany)

1:N 관계 설정
1대 다 관계(EX) 유저(1) 가 게시글들(N)을 보유)
hasMany  < - > belongsTo
1:1 관계 설정 
(부모가 줄때) hasOne < -> belongsTo (자식이 받을때)
N:M 관계 설정
belongsToMany
(ex: 게시글은 여러개의 해시태그를 가진다. 해시태그는 여러개의 게시글을 가진다)

쇼핑몰에서 회원  < -> 주문 목록 <-> 상품
회원입장에서 주문 목록 을 여러개 가질수 있고
주문목록 기준에서 주문목록 하나에 상품이 여러개 있을수 있다
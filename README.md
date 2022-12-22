# Shop App - MooMoo Games Case

Uygulama case olarak geliştirilmiş olup tasarım ve fikir MooMoo Gamese aittir.

## Kullanılan Teknolojiler

- Angular
- Typescript
- HTML
- Scss
- Mongo DB
- Node JS

## Ekran Görüntüleri ve İşlevler

### Header

_Header ekranı kullanıcı giriş yapılıp yapılmadığına göre iki şekilde görünür._

![Header wo user](https://user-images.githubusercontent.com/93818025/209177758-2099a2a7-5854-4ea6-8b15-1cda32b5787f.jpg)

<ol>

<li> Kayıt olma ekranına gider. </li>

<li> Arama işlemi yapar, sağdaki 'x' ikonu input temizler, enter veya soldaki büyüteç ikonu ile arama yapar. </li>

<li> Giriş yapma ekranına gider.</li>

<li> Sepet ekranına gider.</li>

<li> Profile ekranına gider. ( Kullanıcı giriş yapmadıysa Login ekranına yönlendirir.)</li>

</ol>

![Header w user](https://user-images.githubusercontent.com/93818025/209178520-bae7d32f-29b7-447d-bc01-98def7d0ce78.jpg)

<ol>
<li> Favori ürünler ekranına gider. </li>
</ol>

### Top Category Bar Comp.

_Seçilen kategoriye göre rengi değişmekte fakat işlevi çalışmamaktadır._

![top category](https://user-images.githubusercontent.com/93818025/209190300-09627ad2-ae3e-4ebe-8ad9-d412013c653a.png)

### Home

_Ekran ilk yenilendiğinde tüm ürünler 4 numaralı alanda gösterilir._

![Home](https://user-images.githubusercontent.com/93818025/209180113-8943415f-37d8-46c1-a64d-ec315991d809.jpg)

<ol>
<li> Kategorilerin yer aldığı alan. Seçilen kategoriye uygun ürünler 4 numaralı alanda gösterilir. </li>
<li> Sıralama filtresi. 4 numarada gösterilen ürünler seçilen filtreye uygun şekilde sıralanır. </li>
<li> Bu alandaki işlevler çalışmamakta. </li>
<li> Ürünlerin gösterileceği alan. </li>
</ol>

### Search

_Arama input'una göre uygun ürünlerin listelendiği ekran._

![search](https://user-images.githubusercontent.com/93818025/209192435-f056cca7-75cf-457f-9d50-d7326e775470.jpg)

<ol>
<li> Aranan anahtar kelime URL sonunda parametre ile yakalanarak sunucuya istek atılır. </li>
<li> İsteğe uygun ürünler listelenir. </li>
</ol>
### Product Cart Comp.

_Ürünle ilgili bilgiler içeren kart._

![product card](https://user-images.githubusercontent.com/93818025/209191006-857d9282-e08e-4a45-9dfa-106a0b0d3adb.jpg)

<ol>
<li> Detay sayfasına yönlendirir. </li>
<li> Ürünü favorilere ekler. </li>

</ol>

### Detail

_Ürün detaylarının gösterildiği ekran. URL sonunda parametre olarak alınan ürün 'ID'si üzerinden sunucuya istek atar. Bulunan ürün gösterilir._

_Ürün adedi 1'den düşük, ürün stok miktarından fazla olamaz..._

![detail](https://user-images.githubusercontent.com/93818025/209181380-e43b7ea6-9e85-421f-9272-f18f3ecb273b.jpg)

<ol>
<li> Ürün adedi seçildikten sonra basıldığında sepet ekranına yönlendirir. </li>
</ol>

### Budget

_Sepete eklenen ürünlerin gösterildiği alan._

_Sepet bilgileri localstorage içerisinde tutulur._

_Ürün adetleri 1'den az ürünün stok adetinden fazla olamaz._

![cart](https://user-images.githubusercontent.com/93818025/209185244-9725a628-1eb1-447f-8c07-fe46c8d87512.jpg)

<ol>
<li> Sepetteki ürün sayısı gösterilir. </li>
<li> Ürün ismine tıklandığında detay sayfasına yönlendirir. </li>
<li> Ürün adedi değiştirilir. Adet değiştikçe 5. alanda yer alan fiyat bilgileri güncellenir. </li>
<li> Sepete eklenen ürünü kaldırır. </li>
<li> Sepetin toplam tutarı bu alanda yer alır. Adet ve ürünler değiştikçe güncellenir. </li>
<li> Buton çalışmamakta. </li>
<li> Önerilen ürünler alanı. Gelen ürünler statik görüntü amaçlı. </li>
</ol>

### Favorites

_Favoriye eklenen ürünlerin listesi bu alanda yer alır._

_Ekrana gelindiğinde kullanıcı ID si ile sunucuya istek atılır. Kullanıcıya ait ürünler listelenir._

![Shopka](https://user-images.githubusercontent.com/93818025/209186956-f8a4755a-14fe-4a1f-8de1-fe24a04a34a1.jpg)

<ol>
<li> Favori ürün sayısı gösterilir. </li>
<li> Ürün ismine tıklandığında detay sayfasına yönlendirir. </li>
<li> Ürünü favorilerden kaldırır. Listeden hemen silinmez. İstenirse tekrar butona basıldığında tekrar favorilere ürün eklenir. </li>
</ol>

### Auth ( Login & Register)

_Kullanıcı girişi ve kayıt olma ekranı aynı sayfa içerisinde yer alır._

_Component içerisinde tutulan boolean değer ile kullanıcının yapmak istediği işleme uygun görüntü gösterilir, butona basıldığında uygun istek gönderilir._

![register](https://user-images.githubusercontent.com/93818025/209188793-82b5c9e4-a9fe-44df-90e7-aaf49491f717.jpg)

<ol>
<li> Yapılmak istenen işlemler arasında geçişi sağlar. İşleme uygun görüntü gösterilir. </li>
<li> Input alanları tamamı çalışmakta. </li>
<li> Giriş yapma veya üye olma işlemlerini tetikler. Formda ve istek işlemlerinde herhangi bir validation kontrolü yapılmamakta. </li>
<li> Sosyal medya ile giriş çalışmamakta. </li>
</ol>

### Profile

_Ekran kullanıcı bilgilerini göstermekte. Güncelleme işlevi yapmamaktadır._

![porfil](https://user-images.githubusercontent.com/93818025/209189836-4d99bbff-20bd-4319-a973-a681aa1a6efd.jpg)

### Footer

_Görüntü amaçlı, gösterilen hiçbir buton aktif değildir._

![footer](https://user-images.githubusercontent.com/93818025/209190169-dfcdb5d0-69f8-4b96-886f-1557de41d3af.png)

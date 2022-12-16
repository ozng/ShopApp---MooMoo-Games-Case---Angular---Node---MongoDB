import { Component } from '@angular/core';

interface Product {
  id: number;
  imageURL: string;
  title: string;
  price: number;
  overview: string;
  rate: number;
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  productList: Product[] = [
    {
      id: 1,
      imageURL:
        'https://s3-alpha-sig.figma.com/img/88da/0035/1e346fee371704701a5bd39fb31a7ea0?Expires=1672012800&Signature=jACzuDh8EsvQyoGV46NpsyIpjMgS7zYpdJTWLLV~V72dXtU0fIJmJdPmLlkBMYiM2nKflrXjTSveimkV6rJ8R5wR2o0YjCl1XwY93MmSDf0iK5BZiCXdmr2bEyoOQBptwvscxhfU~Yt4xurqSC3nA8eVqhhzXRtXkylmnUGxPHYbZuwV3Ytk1mP0jDnCFknxcXurvubWopl2jGa3YZ8jPjtlbhvmsevpxTnrmld4RzkZqpiuI06zqkd8w39EcuptvwO2TaDIjN9vNFF9DrcMfSPW0q-CoblMu8Ahy28pfgMAFtwFUahQyFVlrcEtYMJafEEYG6Uq9~-gLDFuDE04rA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      title:
        'Vintage Typewriter to post awesome stories about UI desing and webdev.',
      price: 49.5,
      overview: 'Eligible for Shipping To Mars or somewhere else.',
      rate: 4.05,
    },
    {
      id: 2,
      imageURL:
        'https://s3-alpha-sig.figma.com/img/6eed/38f3/6c4e62d636b7857cd3f736a982695a5c?Expires=1672012800&Signature=HLAzbuR1GTw1dRHbVYZaNCQM55rCYnwH8wc9~sVsRmtGzeqpKvQHx8kQpz-0rDdBmYQig48fYWT1n4GoHIME8aE-u9B~xetAHmifOhoXi1dt6GHkpr26R7ZXc79BZX6DTtY76ZMJtCpPYpxGXin3tjO1vsf8FBOEBT-6bcyRFI-fp4SuizF~~1HzdV8eaN9y-BOUHcSbnrYwEm9t7uKzojl5a8CnKAmrKNXxBaPqUUvogeajQ4WmhlB30WmpV4C1JdhOlQtFKUX6Q6Y0qNOJlLEJ3fUnHQ4mTFvRsTNnUHv8dWKMC6TUwJx2qh4p9-gOhHvkLfjPiK62D2OZs~8FaQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      title:
        'Lee Pucker design. Leather botinki for handsome designers. Free shipping.',
      price: 13.95,
      overview: '1258 bids, 359 watchers $5.95 for shipping',
      rate: 4.56,
    },
    {
      id: 3,
      imageURL:
        'https://s3-alpha-sig.figma.com/img/2bc4/ec4b/2712bddc914d8df3d871353015dd5499?Expires=1672012800&Signature=GYX4GFRKRVE3eVuyWQEHR~sdMb~fHZVCRw7AqbZOSxfONwlGg49NrTeSsNmmmlBxIjOR9l3VMQpTW1gUvFmX~AE6EUBKFU1shDsTB9f67T6m0JABt6cZabWwlZoqLDyDNAiMVMsVCCfgfpK3FV2kMAJUOxjyKo~JWoYN1yLwP-6qJZ2w-JANX47V-4UWgt5IcBvRUnB9OSHthrOJndW~l88aYfSNUbEi-etLtbeF-IKt~F3aPRhYllrjCibu3vn-exA0YdCbFvDl8XdytKtQm59BqzRLeULA8Wr63qhg0OQ~EhIpRwPPPCH3nObHm3L6-E8yqoLRnchqKEbVr6SG-g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      title:
        'Timesaving kitten to save months on development. Playful, cute, cheap!',
      price: 128.99,
      overview: 'Eligible for nothing :(',
      rate: 4.87,
    },
    {
      id: 4,
      imageURL:
        'https://s3-alpha-sig.figma.com/img/0725/b41b/2c76aed644960a6054e9a33a36cd469c?Expires=1672012800&Signature=fvKVYekw-88VoMskyNOs9m75zNyTY1b4xLcoqbjdEttep7n5Hc9MY8VXcDQglEiXKvCzL6HBvNffp30W4eSJLnOsUT3z37LqxzfkIJZXIV0uqR1Z0nmghjc4nCPXGj9f67ojO8Ro-MoyVYSlP0gleodS0UnhajltfgOJpB-oAnc5d9jzITH3RtM-QeP5Aozh8nQ6Yi0ylw-ouatB2KKiOTIkMVGHRqs2jPoY9akxig1qoloNr3Z0c8gcQQCFTAgdCBdAUmClEFwzH3czd6Z0H5ChJdztDzIf8iYRJvTlRqTMDefv99b266yRAnj3d8XXMYtGIc6eB2Rpc-Q84rtImg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      title:
        'Plastic useless plugs and tubes for high-fidelity prototyping. Fit & Eat!',
      price: 12.48,
      overview: 'Wordwide shitting available Buyers protection possible!',
      rate: 4.99,
    },
    {
      id: 5,
      imageURL:
        'https://s3-alpha-sig.figma.com/img/39d9/c39c/4373b9dba8e2d40ce2b960d876b722a0?Expires=1672012800&Signature=SwUVEnkF0wdiSrCBLlxFhvWcOOLmYqzP2B~NGDZyTAMBALlD6EPy6sLosBp7S-5eby5maebja~Tvrbmbe2ZsZ9gawF1nvFTKr8RP6sGV8uKMkp9rMR5HZtFasR-tUTOJ~h8q8EdSJHwDZyvl1sCFrhGne2OYGKzgC~EiiV9ss~kU647WWeYbEmFY-drv9LlTj42temy61hzuKeniK85bU8fBkoHZwZWPD6UAozAmwVaZzPXCkCM41TCCm5PlKPuy3BmCL-Er4wg1j0WO3l5bnhgEymPrel6AwGAYXgInN6bo2Jxzrj35JKl67l4UZZcUnfoFitmQ0EUKF0R88Iaxvg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      title:
        'Creativity stimulating lotion. Drink every morning to generate better ideas!',
      price: 12.48,
      overview: 'Wordwide shifting available Buyers protection possible!',
      rate: 4.99,
    },
    {
      id: 6,
      imageURL:
        'https://s3-alpha-sig.figma.com/img/c6a1/1a47/3b8757d0afa244df46b6c375fe0f048b?Expires=1672012800&Signature=l4n15o7ZfqCYNsa~jG5VexseYJfLARp9ary2JyI8yzvZgxrtLrsH~d0-Vwm94V2xJpy5DEBAuVo6S2nbnkNFt-lbXXdmFSUwIjQs6b-DME0P28iwm-5O1iWvCAcyMZHfU-MuWm1RbXa0ooZF2Taf53aoNApPXtS-iTlmvTH2bBQ5nPrSFcX1oyetjq6~TJ7OxKDEoY-nCXy4VLv3W6qoz-QE503uhNaHrAAVMPslraRHskvc4z6ljiN3MGCPNTDtfhvxXkJd3iKMPOQbvPE5InQsjGGX0lCY1uIFEy5-OPz3aMBiPBzPeGjl~awilHINIyeUNoMc7Y3TTe6QpDaafQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      title: 'Prototyping items to create a lot if useless things...',
      price: 128.99,
      overview: 'Showcasing onHovered state',
      rate: 4.87,
    },
    {
      id: 7,
      imageURL:
        'https://s3-alpha-sig.figma.com/img/a9b9/0f55/05ef7fbc98bd251ed8dc1f862b0c5cdd?Expires=1672012800&Signature=SCixNMldZMKdTD367MGWkcTK8KC~u4rPaG1kZJz59D0~1OEFsniUadnz910W6zhPEjDq7CaMgXiKpgOVWQ~y4bQ-AHEEvVu3dC1Q-vg~hLbrtQsXlrIN8PsNdJAblfSnRmSsD6vJl4jYJr3ZLtgXkyUaSdsZ0NgrzQAj9IIAY6FGjCrIJ1xUhzgPlaQqqJIeCa7oCcep9JKV6pa6pVxn-Q8-UhZ58By9T3cLOKSJs8pcQREBneWaeJ1njgf4VYY6aW-38bNJr7NLPUJLHjTh8EfOhIcoo1ApryRtdykLrauUjOIuENQjgGbwp~04qrNXCbZZ5aTvKzlu6j7j8V7Kvg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      title: 'John Von Ebalkin SPRING',
      price: 13.95,
      overview: '1258 bids, 359 watchers $5.95 for shipping',
      rate: 4.56,
    },
    {
      id: 8,
      imageURL:
        'https://s3-alpha-sig.figma.com/img/ea46/183f/517982871b412ddc59c739450802b7df?Expires=1672012800&Signature=DR6rI3T7u6IgaRhS1N4AfS-sIenvt-ANJ7eJlNdGKBluRO6yezw-qgHghRSkuqULuG479NemK4zwzUYqOr9-hTm3FcJi6y-CW2FBKkCLBOyds9JKIz0zsVwD-v-Qx~XSPhGZSC6XZbKq~wkKUdGOrtAueBtqfQdH~zoM4yuiNDyUPuYAeoU75Cy73HTi27fcokCAXiCxcbqhtAsHcEjHEmurcEWaT7LiV-34AuhPC9mEB52TVqxem1if0aij27hr-55G6Wcj2D61Vj4oToFaeKsVT33PsCpAUt250mzkXV5tu0u1Uw9ziol6t~D0XHpaccYCOJSDBZP8u-3w9E1IzA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      title:
        'Envelope, Stripes, Pencil and etc. Purchase this kit today and feel OKAY',
      price: 9.5,
      overview: 'Eligible for Shipping To Mars or somewhere else',
      rate: 4.77,
    },
    {
      id: 9,
      imageURL:
        'https://s3-alpha-sig.figma.com/img/68b1/0d6d/06dc2c8674b051300d0cfbe043ea3628?Expires=1672012800&Signature=IEWleUNR4U3m2a6Aj3nKhwEHjWm88unnCp9IhyFpxonIX~GmcaJbN0GgO03RXs7yIoJ7jgE~9L2qABBvwQjWs4kIYhGVLmFGHd-yuppABvpWAsFN4Yo6ANIh8B-deAwqqTcb7uDW8MFh1n4G4Ja6x4NkdlXApT2ON63FzwyRQ2w3NSVZ9w-Z0MDdbiXRJPw6rTyx7KlpUVs4bKAoweeaVm8wQk1oOdGXF23kXecqWYa87BVXSC7deBq-ePeE6k0Hxl1o2TZ3MabevTtG64fsN2mzc67i9D8cqpXiHvgeNiCbkqbBFBUdj1Anb~MEQbJY0~kVV-m-ums2SbXYApP5rQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      title: 'Professional teadrinking set for every designer and developer',
      price: 128.99,
      overview: 'Eligible for nothing :(',
      rate: 4.87,
    },
    {
      id: 10,
      imageURL:
        'https://s3-alpha-sig.figma.com/img/3984/b71f/da978743af13b31f6844b8e110b2017f?Expires=1672012800&Signature=N8Hp3u~OdABQBOInLjJYrvxi8oxZyHeHi7Yi~RNRVsojORXYMKLITTxTWW58CP~eLyB059c-09RRpZOgqa~Ls3O8vMWpY3-8TYJEqqF22~TJYLVEarwjJQEt4ds~F3Mr5v8V64acPc-5vYyluPz12Z-4nWRCa75sNMstRcqAJDMqKgsvfZ8vu9Rb8AegUDJdW0cjNNqRWnYw4c7AsZiwroXTfDiaeKazeyrJCH5fAp7xQew9JEtcWXq3adcLRXbuWlrU01j7vqH1Ryj-n4yEYhcuKyIB3bTAipScNJ6Ylt3cXdc3mu-HcgwdZJh8WAL1SfznYZEmU8qTCNFIGUJ4ig__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      title: 'One string Bonsai description',
      price: 11.68,
      overview: 'Wordwide shifting available Buyers protection possible!',
      rate: 4.99,
    },
    {
      id: 11,
      imageURL:
        'https://s3-alpha-sig.figma.com/img/3494/b74b/4d58dacb4bdb676bcd2e8df2950fe9ae?Expires=1672012800&Signature=B4QKeuh6n2kOsBeibEXJFoCrk18ICOzAtI4EC4Ky3r0~OYBSpTQasuHh87k2nlvGpG1dLuLHBXzXK8BbpqgxRaSg51jBnQXUfAVy8kII3cZGiIXWMrWnnAddyxo7WbttzhkdAIZsdq0wODfY9DezuUGmmDOuvtXW8LX~wtGcOUePhoF-Nt9n52F3zeB7s5G~l80d1PH-Z1z~hBp1PQFNbhh2FIXHDjf2KT5~xGTvEx2BWCR1LRtljTusb1hEIibtznRv11n7ygnrMNbjeq4SiHIE61ZiW4swecr9iMxsQpuBFDMIZL-v4Rcp3gDkEEMKgBUgf0NE55-xKiYLY6k9KQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      title:
        'Simply best item in town to shine bright with your Nine Inch Nails',
      price: 1.25,
      overview: 'Eligible for Shipping To Mars or somewhere else',
      rate: 4.77,
    },
    {
      id: 12,
      imageURL:
        'https://s3-alpha-sig.figma.com/img/b132/199c/c4009d0318aed0daab5de9842d6cdc33?Expires=1672012800&Signature=WHhIyBsMTUsHRzRfSSlOcooixjtnGgSkngV8dCOmX~nQIwzSr-joc1~H1g8DzwvUl6h2VwAhXxrYiqaZIlnwCKOvdIpXSgNgsYEfVSqIUgqZlGaHD61Oh50CP9lS2~Zm3EiypYcCN~vPHsWXmkIlv~OIwYau0yMinnn957-5f~fMZ27rmqvlOfv7rKh-h2EmaXulnim0tGGzi1tVjTTpUyGcpCfnNE2ap3V8wn1~tmjqvyhY4GsSQaXrFAvF0YLDqEdag46fFKxX6up4kdT~OkODrExm0xf2agyUgQhdqipmWu6Q-4Xbj5aylrRSM5BhiAdAZPhByC1V6J~MXAoo5w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      title:
        'KISTOCHKI & KRASIBO. Top cosmetics brand from Chelyabinsk is here!',
      price: 23.25,
      overview: '1258 bids, 359 watchers $5.95 for shipping',
      rate: 4.56,
    },
  ];
}

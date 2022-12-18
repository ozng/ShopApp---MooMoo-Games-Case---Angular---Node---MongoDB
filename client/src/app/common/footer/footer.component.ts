import { Component } from '@angular/core';

interface LeftLabelList {
  id: string;
  name: string;
}

interface SocialList {
  id: string;
  name: string;
  label: string;
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  socialList: SocialList[] = [
    {
      id: '1',
      label: 'Facebook',
      name: 'facebook',
    },
    {
      id: '2',
      label: 'Twitter',
      name: 'twitter',
    },
  ];

  leftList: LeftLabelList[] = [
    {
      id: '1',
      name: 'Hakkımızda',
    },
    {
      id: '2',
      name: 'Vizyon & Misyon',
    },
    {
      id: '3',
      name: 'Kilometre Taşları',
    },
    {
      id: '4',
      name: 'Yönetim',
    },
    {
      id: '5',
      name: 'Kurumsal Sosyal Sorumluluk',
    },
    {
      id: '6',
      name: 'İş Ortaklarımız',
    },
    {
      id: '7',
      name: 'Tedarikçi Olmak İstiyorum',
    },
    {
      id: '8',
      name: 'Hepsipay İşyeri Olmak İstiyorum',
    },
    {
      id: '9',
      name: 'Tedarikçi Davranış Kuralları',
    },
    {
      id: '10',
      name: 'Girişimci Kadınlara Teknoloji Gücü',
    },
    {
      id: '11',
      name: 'Teslimat Noktası Olmak İstiyorum',
    },
    {
      id: '12',
      name: "Hepsiburada'da Satıcı Ol",
    },
    {
      id: '13',
      name: 'Yatırımcı ilişkileri',
    },
    {
      id: '14',
      name: 'Çözüm merkezi',
    },
    {
      id: '15',
      name: 'Kariyer',
    },
    {
      id: '16',
      name: 'Basın Odası',
    },
    {
      id: '17',
      name: 'Bizden Haberler',
    },
    {
      id: '18',
      name: 'İletişim',
    },
  ];
}

import { Injectable } from '@angular/core';

import {
  delay,
  Observable,
  of,
} from 'rxjs';

import { Profile } from '../models/models';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor() {}

  get(id: number): Observable<Profile> {
    const data: Profile[] = [
      {
        id: 1,
        firstName: 'Khai',
        lastName: 'Nguyen',
        email: 'khai.nguyen@example.com',
        phone: '0945123456',
        is2Factor: true,
        password: 'P@ssw0rd1',
        bio: 'Frontend developer passionate about Angular.',
      },
      {
        id: 2,
        firstName: 'Linh',
        lastName: 'Tran',
        email: 'linh.tran@example.com',
        phone: '0934567890',
        is2Factor: false,
        password: '12345678',
      },
      {
        id: 3,
        firstName: 'Nam',
        lastName: 'Phan',
        email: 'nam.phan@example.com',
        phone: '0978543210',
        is2Factor: true,
        password: 'N@mSecure99',
        bio: 'Backend developer working with NestJS.',
      },
      {
        id: 4,
        firstName: 'Minh',
        lastName: 'Vo',
        email: 'minh.vo@example.com',
        phone: '0912345678',
        is2Factor: false,
        password: 'voMinh@2024',
      },
      {
        id: 5,
        firstName: 'Huyen',
        lastName: 'Le',
        email: 'huyen.le@example.com',
        phone: '0987654321',
        is2Factor: true,
        password: 'Huyen@Secure',
        bio: 'UI/UX designer who loves crafting great experiences.',
      },
      {
        id: 6,
        firstName: 'Duc',
        lastName: 'Hoang',
        email: 'duc.hoang@example.com',
        phone: '0903123456',
        is2Factor: false,
        password: 'Hoang123',
      },
      {
        id: 7,
        firstName: 'Trang',
        lastName: 'Bui',
        email: 'trang.bui@example.com',
        phone: '0967234567',
        is2Factor: true,
        password: 'BuiTrang!2024',
        bio: 'Fullstack developer with a love for coding.',
      },
      {
        id: 8,
        firstName: 'Phong',
        lastName: 'Nguyen',
        email: 'phong.nguyen@example.com',
        phone: '0923123456',
        is2Factor: false,
        password: 'NguyenPhong99',
      },
      {
        id: 9,
        firstName: 'Thao',
        lastName: 'Do',
        email: 'thao.do@example.com',
        phone: '0956123456',
        is2Factor: true,
        password: 'Thao@Pass123',
      },
      {
        id: 10,
        firstName: 'Hoang',
        lastName: 'Dang',
        email: 'hoang.dang@example.com',
        phone: '0945987654',
        is2Factor: false,
        password: 'DangHoang_2024',
        bio: 'Mobile developer specializing in Flutter.',
      },
    ];

    return of(data.find((x) => x.id === id) ?? ({} as Profile)).pipe(
      delay(2000)
    );
  }
}

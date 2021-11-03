using Core.Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Text;

namespace Business.Contants
{
    public static class Messages
    {
        public static String ProductAdded = "Ürün Basariyla Ekleneid";
        public static String ProductDeleted = "Ürün Basariyla Silindi";
        public static String ProductUpdated = "Ürün Basariyla Güncellendi";

        public static string UserNotFound = "Kullanıcı Bulunamadı";
        public static string PasswordError ="Şifre Hatalı";
        public static string SuccessfulLogin="Giris Basarili";

        public static string UserAlreadyExists = "Böyle bir kullanıcı mevcut";

        public static string UserRegistered = "Kullanıcı oluşturuldu";

        public static string AccessTokenCreated = "Access Token Olusturuldu!";
    }
}

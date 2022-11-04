import { createStore } from "zmp-core/lite";
import { randomString } from "./helper";
const store = createStore({
  state: {
    user: {
      // id: "12345678",
      // name: "Phạm Nhật Linh",
      avatar:
        "https://scontent.fsgn5-2.fna.fbcdn.net/v/t39.30808-6/242723774_1137063226701799_2338835602932215627_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=174925&_nc_ohc=4VVC3kiygK8AX87T7Sh&tn=gVqG5ZahVDfK0o1K&_nc_ht=scontent.fsgn5-2.fna&oh=00_AT_eYYNtIvAZJ64iYlm2NANnVm8G6QUq3yahAtkhj6GuTw&oe=632ECB75",
      user_id: 1,
      full_name: "Nguyen Van A",
      nick_name: "VanA",
      date_of_birth: "20/10/1999",
      gender: "man",
      nationality: "Viet Nam",
      phone: "012345678",
      email: "nguyenvana@gmail.com",
      facebook_link: "https://www.facebook.com/NguyenVanA/",
      google_link: "https://www.google.com/NguyenVanA/",
      password: "a123456789b",
    },
    swipeFirstTagData: [
      {
        id: 1,
        name: "Dịch Vụ Số ",
        href: "#",
        imageSrc:
          "		https://salt.tikicdn.com/cache/36x36/ts/social/92/b4/d2/99675cba7c6df2a8c7eac28e2cb8eb5b.png.webp",
        imageAlt: "Front of men's Basic Tee in black.",
      },
      {
        id: 2,
        name: "#Tikixuhuong",
        href: "#",
        imageSrc:
          "	https://salt.tikicdn.com/cache/36x36/ts/miniapp/d0/d3/f3/2ae616741748a37b47ef20bc5faea92b.jpeg.webp",
        imageAlt: "Front of men's Basic Tee in black.",
      },
      {
        id: 3,
        name: "Mở Thẻ Nhận Quà",
        href: "#",
        imageSrc:
          "		https://salt.tikicdn.com/cache/36x36/ts/social/9c/52/a9/923aa536f7a08c7f978fa24a93b79507.png.webp",
        imageAlt: "Front of men's Basic Tee in black.",
      },
      {
        id: 4,
        name: "Dịch Vụ Số ",
        href: "#",
        imageSrc:
          "		https://salt.tikicdn.com/cache/36x36/ts/social/92/b4/d2/99675cba7c6df2a8c7eac28e2cb8eb5b.png.webp",
        imageAlt: "Front of men's Basic Tee in black.",
      },
    ],
    styleSubCate: [],
    programSlide: [
      "https://salt.tikicdn.com/ts/brickv2og/07/e7/b4/b7b07e0d5ba299b4ad980977c4fdd8ce.png",
      "https://salt.tikicdn.com/ts/brickv2og/65/a1/8e/b33e54b43e668ce1cc98eefcb64fa241.png",
      "https://salt.tikicdn.com/ts/brickv2og/07/e7/b4/b7b07e0d5ba299b4ad980977c4fdd8ce.png",
    ],
    campaignSlide: [
      "	https://salt.tikicdn.com/cache/w750/ts/upload/37/4f/14/dd8b33c6bc1ccebaecaf45dde02ca166.png.webp",
      "	https://salt.tikicdn.com/cache/w750/ts/upload/c8/a7/96/c698f113eeda56010b6eacfc762df4ff.png.webp",
    ],
    carouselContainerData:[
    "	https://salt.tikicdn.com/cache/w750/ts/banner/0c/24/f6/6daeee4ad1c9bfc4ce9d8ff87087f582.png.webp",
      "https://salt.tikicdn.com/cache/w750/ts/banner/0d/f5/59/fb70bec43922d66388a1c830459b4694.png",
      "	https://salt.tikicdn.com/cache/w750/ts/banner/5e/4d/d1/8d1ac569cfc6942af0da94c4c2b96333.jpg",
      "https://salt.tikicdn.com/cache/w750/ts/banner/4c/4b/a6/22fa0f552e7ab3afbc96dd3054fcc2d6.png"
    ],
    dataCharTab: [
      {
        saleman: "Triệu Thị Trinh	",
        totalPolicies: "23",
        revenue: "17984000",
        target: "100000000",
        key: "1",
      },
      {
        saleman: "Triệu Thị Trinh	",
        totalPolicies: "23",
        revenue: "35984000",
        target: "100000000",
        key: "1",
      },
      {
        saleman: "Triệu Thị Trinh	",
        totalPolicies: "23",
        revenue: 120000000,
        target: 100000000,
        key: "1",
      },
      {
        saleman: "Triệu Thị Trinh	",
        totalPolicies: "23",
        revenue: "17984000",
        target: "100000000",
        key: "1",
      },
      {
        saleman: "Triệu Thị Trinh	",
        totalPolicies: "23",
        revenue: "17984000",
        target: "100000000",
        key: "1",
      },
      {
        saleman: "Triệu Thị Trinh	",
        totalPolicies: "23",
        revenue: "17984000",
        target: "100000000",
        key: "1",
      },
    ],
    dataCharComponent: {
      x: ["January", "February", "March", "April", "May", "June", "July"],
      y: ["-2000", "900", "500", "2000", "-9000", "-5000", "-900"],
    },
    dataCharComponent2: {
      x: ["January", "February", "March", "April", "May", "June", "July"],
      y: ["-3000", "100", "400", "2300", "-3040", "-2100", "-500"],
    },
    dataSmartPhoneMarket: [
      {
        time: "q1-2022",
        brand: "Oppo",
        Shipments2021Q1: "20.6",
        Shipments2022Q1: "13.7",
        color: "#042940",
      },
      {
        time: "q1-2022",
        brand: "Honor",
        Shipments2021Q1: "3.5",
        Shipments2022Q1: "13.5",
        color: "#005C53",
      },
      {
        time: "q1-2022",
        brand: "Vivo",
        Shipments2021Q1: "20.5",
        Shipments2022Q1: "13.3",
        color: "#9FC131",
      },
      {
        time: "q1-2022",
        brand: "Apple",
        Shipments2021Q1: "13.2",
        Shipments2022Q1: "12.4",
        color: "#DBF227",
      },
      {
        time: "q1-2022",
        brand: "Xiaomi",
        Shipments2021Q1: "13.5",
        Shipments2022Q1: "11.0",
        color: "#D6D58E)",
      },
      {
        time: "q1-2022",
        brand: "Others",
        Shipments2021Q1: "15.1",
        Shipments2022Q1: "10.2",
        color: "#D6D58F",
      },
    ],
    prodcutsInformationData: [
      {
        id: 1,
        name: "Thang ghế, giàn giáo gia đình, thông minh, gấp gọn tiện lợi",
        price: 1639000,
        oldprice: "2.000.000",
        imageSrc:
          "https://salt.tikicdn.com/cache/280x280/ts/product/3a/bd/c3/d4d2e0852da75a01e6f1c3d5c4a5e837.jpg.webp",
      },
      {
        id: 2,
        name: "Sườn non heo (500g) - Thích hợp với các món nướng",
        price: 1639000,
        oldprice: "2.000.000",
        imageSrc:
          "https://vn-live-01.slatic.net/shop/9668d6bc5f88d33f3e92f87de880f16d.jpeg",
      },
      {
        id: 3,
        name: "Sữa Bột Abbott Ensure Gold Vani Ít Ngọt 850g",
        price: 30000000,
        oldprice: "2.000.000",
        imageSrc:
          "data:image/jpeg;base64,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",
      },
      {
        id: 4,
        name: "Smart Tivi Qled The Frame Samsung 4K 50 inch QA50LS03A",
        price: 13909900,
        oldprice: "2.000.000",
        imageSrc:
          "https://salt.tikicdn.com/cache/280x280/ts/product/d6/4c/b4/087f5f742de240aa97407474a2ca5188.png.webp",
      },
      {
        id: 5,
        name: "Giá Đỡ Laptop Hợp Kim Nhôm Cao Cấp Có Thể Gấp Gọn,",
        price: 200000,
        oldprice: "2.000.000",
        imageSrc:
          "https://salt.tikicdn.com/cache/280x280/ts/product/7f/dd/bf/d8c68330e0746afc2df65f4150e4165f.png.webp",
      },
    ],
    productDescriptionData: [
      {
        subcategory_id: "WaterItem",
        id: 1,
        carouselImg:
          "https://salt.tikicdn.com/cache/w750/media/catalog/producttmp/22/10/e8/7de6b57d5eb8ac17fb7948960995c958.PNG.webp",
        label: "Thùng 24 Lon Nước Tăng Lực Sting Dâu (320ml/Lon)",
        price: 202000,
        old_price: 50000000,
        descriptionImg:
          "https://salt.tikicdn.com/cache/w750/media/catalog/producttmp/85/39/6e/0acc2f059911b036036648a8c7e6df89.PNG.webp",
        description:
          "Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển, phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....",
      },
      {
        id: 2,
        carouselImg:
          "	https://salt.tikicdn.com/cache/w750/ts/product/93/c6/30/f9bf3ea758c116dcb555e8ac99362ebb.jpg.webp",
        label: "Smart Tivi Qled The Frame Samsung 4K 50 inch QA50LS03A",
        price: 100000,
        old_price: 10000000,
        descriptionImg:
          "https://salt.tikicdn.com/cache/w750/ts/product/55/7b/f1/1471e2b525317cc21654260ace178b10.jpg.webp",
        description:
          "Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển, phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....",
      },
      {
        id: 3,
        carouselImg:
          "	https://salt.tikicdn.com/cache/w750/ts/product/4c/83/6b/298a24fe79da1db1304837c6937c0bc4.jpg.webp",
        label:
          "Giá Đỡ Laptop Hợp Kim Nhôm Cao Cấp Có Thể Gấp Gọn, Giúp Tản Nhiệt Laptop, Macbook,",
        price: 120000,
        old_price: 10200000,
        descriptionImg:
          "	https://salt.tikicdn.com/cache/w750/ts/tmp/d2/9e/60/1eee641f68ebaa4d891f7512f3400784.jpg.webp",
        description:
          "Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển, phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....",
      },
      {
        subcategory_id: "WaterItem",
        id: 4,
        carouselImg:
          "https://salt.tikicdn.com/cache/w750/media/catalog/producttmp/49/94/fc/6ade00672e632f1b6bed9f120ee8c72a.PNG.webp	",
        label: "Thùng 24 Chai Trà Ô Long Tea+ Plus (455ml / Chai)",
        price: 120500,
        old_price: 11200000,
        descriptionImg:
          "https://salt.tikicdn.com/cache/w750/media/catalog/producttmp/f5/62/74/5b3e67dd37bbdad389fe8625a1ac9ad0.PNG.webp",
        description:
          "Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển, phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....",
      },
      {
        subcategory_id: "WaterItem",
        id: 5,
        carouselImg:
          "https://salt.tikicdn.com/cache/w750/media/catalog/producttmp/dc/05/a3/8b3815e58eea4c72b41ac988d30d81bb.PNG.webp",
        label: "Thùng 24 Lon Nước Tăng Lực Sting Dâu (320ml/Lon)",
        price: 220500,
        old_price: 50000000,
        descriptionImg:
          "https://salt.tikicdn.com/cache/w750/media/catalog/producttmp/85/39/6e/0acc2f059911b036036648a8c7e6df89.PNG.webp",
        description:
          "Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển, phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....",
      },
      {
        subcategory_id: "WaterItem",
        id: 6,
        carouselImg:
          "https://salt.tikicdn.com/ts/category/92/b5/c0/3ffdb7dbfafd5f8330783e1df20747f6.png",
        label: "May Tinh Laptop",
        price: 2200000000,
        descriptionImg:
          "https://salt.tikicdn.com/cache/w750/media/catalog/producttmp/85/39/6e/0acc2f059911b036036648a8c7e6df89.PNG.webp",
        description:
          "Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển, phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....",
      },
    ],
    categoryItem: [
      {
        id: "BabyToys",
        label: "Đồ Chơi mẹ & bé ",
        ImageSrc:
          "https://salt.tikicdn.com/ts/category/13/64/43/226301adcc7660ffcf44a61bb6df99b7.png",
        onClick(e) {
          console.log(e);
        },
        key: "1",
      },
      {
        id: "trend",
        label: "NGON",
        ImageSrc:
          "	https://salt.tikicdn.com/ts/category/1e/8c/08/d8b02f8a0d958c74539316e8cd437cbd.png",
        onClick(e) {
          console.log(e);
        },
        key: "2",
      },
      {
        id: "Smartphone&Laptop",
        label: "Điện Thoại - Máy Tính Bảng",
        ImageSrc:
          "	https://salt.tikicdn.com/ts/category/54/c0/ff/fe98a4afa2d3e5142dc8096addc4e40b.png",
        onClick(e) {
          console.log(e);
        },
        key: "3",
      },
      {
        id: "beauty",
        label: "Làm Đẹp - Sức Khoẻ",
        ImageSrc:
          "	https://salt.tikicdn.com/ts/category/73/0e/89/d7ca146de7198a6808580239e381a0c8.png",
        onClick(e) {
          console.log(e);
        },
        key: "4",
      },
      {
        id: "electricity",
        label: " Điện Gia Dụng",
        ImageSrc:
          "https://salt.tikicdn.com/ts/category/61/d4/ea/e6ea3ffc1fcde3b6224d2bb691ea16a2.png",
        onClick(e) {
          console.log(e);
        },
        key: "5",
      },
      {
        id: "womanFashion",
        label: " Thời Trang Nữ",
        ImageSrc:
          "	https://salt.tikicdn.com/ts/category/55/5b/80/48cbaafe144c25d5065786ecace86d38.png",
        onClick(e) {
          console.log(e);
        },
        key: "6",
      },
      {
        id: "manfashion",
        label: "Thời Trang Nam ",
        ImageSrc:
          "	https://salt.tikicdn.com/ts/category/00/5d/97/384ca1a678c4ee93a0886a204f47645d.png",
        onClick(e) {
          console.log(e);
        },
        key: "1",
      },
      {
        id: "womanShoes",
        label: "Giày - Dép nữ  ",
        ImageSrc:
          "	https://salt.tikicdn.com/ts/category/cf/ed/e1/96216aae6dd0e2beeb5e91d301649d28.png",
        onClick(e) {
          console.log(e);
        },
        key: "1",
      },
      {
        id: "womanHandBag",
        label: " Túi thời trang nữ",
        ImageSrc:
          "https://salt.tikicdn.com/ts/category/31/a7/94/6524d2ecbec216816d91b6066452e3f2.png",
        onClick(e) {
          console.log(e);
        },
        key: "1",
      },
      {
        id: "manShoes",
        label: "Giày Dép Nam",
        ImageSrc:
          "	https://salt.tikicdn.com/ts/category/d6/7f/6c/5d53b60efb9448b6a1609c825c29fa40.png",
        onClick(e) {
          console.log(e);
        },
        key: "1",
      },
      {
        id: "manHandBag",
        label: " Túi thời trang Nam",
        ImageSrc:
          "	https://salt.tikicdn.com/ts/category/9b/31/af/669e6a133118e5439d6c175e27c1f963.png",
        onClick(e) {
          console.log(e);
        },
        key: "1",
      },
    ],
    subCategoryItem: [
      {
        id: "taDan",
        category_id: "BabyToys",
        label: "Ta Dan",
        imgSrc:
          "https://salt.tikicdn.com/cache/280x280/ts/product/87/30/ec/d9abfd5c390e4871d7b769a75cca9c7d.jpg",
      },
      {
        id: "miengLotSoSinh",
        category_id: "BabyToys",
        label: "Mieng Lot So Sinh",
        imgSrc:
          "	https://salt.tikicdn.com/cache/280x280/ts/product/b7/4a/62/bb3a242a8bf157d23eeb668fc12695f4.jpg",
      },
      {
        id: "taQuan",
        category_id: "BabyToys",
        label: "Ta Quan",
        imgSrc:
          "https://salt.tikicdn.com/cache/280x280/ts/product/2b/c6/2a/b758a704b8ff27b3bf3b169797aa3543.png",
      },
      {
        id: "taGiay",
        category_id: "BabyToys",
        label: "Ta Giay",
        imgSrc:
          "https://salt.tikicdn.com/cache/280x280/ts/product/8c/a0/a6/ee3ccc891600cb8706deb4431bacdae2.jpg",
      },
      {
        id: "taVai",
        category_id: "BabyToys",
        label: "Ta Vai",
        imgSrc:
          "https://salt.tikicdn.com/cache/280x280/ts/product/a1/a0/cd/7f0a40c8f64159384fbd355c65543a2f.jpg",
      },
      {
        id: "traiCayNoiDia",
        category_id: "trend",
        label: "trái cây nội địa",
        imgSrc:
          "	https://salt.tikicdn.com/cache/280x280/ts/product/75/26/21/7de7c14d91f105c8b2c432b3fe7be05e.jpg",
      },
      {
        id: "traiCayNhapKhau",
        category_id: "trend",
        label: "trái cây nhập khẩu",
        imgSrc:
          "https://salt.tikicdn.com/cache/280x280/ts/product/45/96/d0/f318f84216506601a0f8480a7949ab17.jpg",
      },

      {
        id: "smartPhone",
        category_id: "Smartphone&Laptop",
        label: "Dien Thoai SmartPhone",
        imgSrc:
          "https://salt.tikicdn.com/cache/280x280/media/catalog/producttmp/b7/94/b3/5dd23e7114a08d6cf832305ee882190f.jpg",
      },
      {
        id: "tablet",
        category_id: "Smartphone&Laptop",
        label: "May Tinh Bang",
        imgSrc:
          "https://salt.tikicdn.com/cache/280x280/media/catalog/producttmp/b7/94/b3/5dd23e7114a08d6cf832305ee882190f.jpg",
      },
    ],
  
    productsStyleSubCate: [
      {
        id: "1",
        tab_id: "#tab-1",
        sub_category_id: "taDan",
        label: "Tã Dán Huggies Dry Gói Đại XL38 (38 Miếng) - Bao Bì Mới",
        imageSrc:
          "https://salt.tikicdn.com/cache/350x350/media/catalog/producttmp/94/cb/96/989036e7d61dc51cf3b73c35deb1a02f.jpg.webp",
        price: 1720000,
        description:
          "Tã quần Bobby mới- Lõi nén thần kì 3mm- Siêu mỏng khô thoáng là cuộc cách mạng mới trong ngành tã trẻ em. Mỏng không tưởng - Thấm hút bất ngờ.Với công nghệ ép lõi đột phá từ Nhật Bản giúp tã :Siêu m... ",
      },
      {
        id: "2",
        tab_id: "#tab-1",
        sub_category_id: "taDan",
        label:
          "Thùng 3 Gói Tã/ Bỉm Dán PAMPERS Nhật Thượng Hạng,  Size L (126 miếng, 9-14kg), Siêu Mềm Mịn & Thoáng Khí ",
        imageSrc:
          "https://salt.tikicdn.com/cache/350x350/ts/product/4d/3b/c0/82a65d87acac58fd8ca9e64e6e82776e.png.webp",
        price: 1720000,
        description:
          "Tã quần Bobby mới- Lõi nén thần kì 3mm- Siêu mỏng khô thoáng là cuộc cách mạng mới trong ngành tã trẻ em. Mỏng không tưởng - Thấm hút bất ngờ.Với công nghệ ép lõi đột phá từ Nhật Bản giúp tã :Siêu m... ",
      },
      {
        id: "3",
        tab_id: "#tab-1",
        sub_category_id: "taDan",
        label:
          "Tã dán sơ sinh Huggies Tràm Trà Tự Nhiên NB74 (dưới 5kg) - Gói 74 miếng + Tặng 10 miếng",
        imageSrc:
          "https://salt.tikicdn.com/cache/350x350/media/catalog/producttmp/c0/44/ba/064ab79a079e17c302302aaf60c87fbd.jpg.webp",
        price: 1720000,
        description:
          "Tã quần Bobby mới- Lõi nén thần kì 3mm- Siêu mỏng khô thoáng là cuộc cách mạng mới trong ngành tã trẻ em. Mỏng không tưởng - Thấm hút bất ngờ.Với công nghệ ép lõi đột phá từ Nhật Bản giúp tã :Siêu m... ",
      },
      {
        id: "4",
        tab_id: "#tab-1",
        sub_category_id: "taDan",
        label:
          "Tã dán sơ sinh Huggies Tràm Trà Tự Nhiên NB74 (dưới 5kg) - Gói 74 miếng + Tặng 10 miếng",
        imageSrc:
          "https://salt.tikicdn.com/cache/350x350/media/catalog/producttmp/c0/44/ba/064ab79a079e17c302302aaf60c87fbd.jpg.webp",
        price: 1720000,
        description:
          "Tã quần Bobby mới- Lõi nén thần kì 3mm- Siêu mỏng khô thoáng là cuộc cách mạng mới trong ngành tã trẻ em. Mỏng không tưởng - Thấm hút bất ngờ.Với công nghệ ép lõi đột phá từ Nhật Bản giúp tã :Siêu m... ",
      },
      {
        id: "5",
        tab_id: "#tab-1",
        sub_category_id: "taDan",
        label:
          "[CỘNG 6 MIẾNG] Tã dán Moony cao cấp S84+6 - Nhập khẩu từ Nhật Bản",
        imageSrc:
          "https://salt.tikicdn.com/cache/350x350/media/catalog/producttmp/c0/44/ba/064ab79a079e17c302302aaf60c87fbd.jpg.webp",
        price: 1720000,
        description:
          "Tã quần Bobby mới- Lõi nén thần kì 3mm- Siêu mỏng khô thoáng là cuộc cách mạng mới trong ngành tã trẻ em. Mỏng không tưởng - Thấm hút bất ngờ.Với công nghệ ép lõi đột phá từ Nhật Bản giúp tã :Siêu m... ",
      },
      {
        id: "6",
        tab_id: "#tab-2",
        sub_category_id: "miengLotSoSinh",
        label: "Miếng lót sơ sinh Bobby fresh newborn 2",
        imageSrc:
          "	https://salt.tikicdn.com/cache/350x350/ts/product/9a/43/6a/e8d487b03e0e37f4d038123ab6bb3f72.jpg.webp",
        price: 740000,
        description:
          "Tã quần Bobby mới- Lõi nén thần kì 3mm- Siêu mỏng khô thoáng là cuộc cách mạng mới trong ngành tã trẻ em. Mỏng không tưởng - Thấm hút bất ngờ.Với công nghệ ép lõi đột phá từ Nhật Bản giúp tã :Siêu m... ",
      },
      {
        id: "7",
        tab_id: "#tab-2",
        sub_category_id: "miengLotSoSinh",
        label: "Miếng lót sơ sinh Huggies Dry NewBorns 2 60 miếng",
        imageSrc:
          "https://salt.tikicdn.com/cache/350x350/media/catalog/producttmp/b4/5e/81/726fc9e2a0a737378da82b5b604182ee.jpg.webp",
        price: 104000,
        description:
          "Tã quần Bobby mới- Lõi nén thần kì 3mm- Siêu mỏng khô thoáng là cuộc cách mạng mới trong ngành tã trẻ em. Mỏng không tưởng - Thấm hút bất ngờ.Với công nghệ ép lõi đột phá từ Nhật Bản giúp tã :Siêu m... ",
      },
      {
        id: "8",
        tab_id: "#tab-2",
        sub_category_id: "miengLotSoSinh",
        label: "Tã Dán Sơ Sinh Cao Cấp Nhật Bản NB90",
        imageSrc:
          "https://salt.tikicdn.com/cache/350x350/ts/product/f7/5b/bf/e9e801b059fc83368d497b672b02c4ff.jpg.webp",
        price: 104000,
        description:
          "Tã quần Bobby mới- Lõi nén thần kì 3mm- Siêu mỏng khô thoáng là cuộc cách mạng mới trong ngành tã trẻ em. Mỏng không tưởng - Thấm hút bất ngờ.Với công nghệ ép lõi đột phá từ Nhật Bản giúp tã :Siêu m... ",
      },
      {
        id: "9",
        tab_id: "#tab-2",
        sub_category_id: "taQuan",
        label: "Tã quần a Dry Tràm Trà Tự Nhiên MEGA JUMBO + Tặng 6 miếng",
        imageSrc:
          "https://salt.tikicdn.com/cache/350x350/media/catalog/producttmp/06/24/f1/77b236db0250e4aaa69340480bfafcfa.jpg.webp",
        price: 448000,
        description:
          "Tã quần Bobby mới- Lõi nén thần kì 3mm- Siêu mỏng khô thoáng là cuộc cách mạng mới trong ngành tã trẻ em. Mỏng không tưởng - Thấm hút bất ngờ.Với công nghệ ép lõi đột phá từ Nhật Bản giúp tã :Siêu m... ",
      },
      {
        id: "10",
        tab_id: "#tab-3",
        sub_category_id: "taQuan",
        label: "Tã quần Huggies Dry Tràm Trà Tự Nhiên MEGA JUMBO",
        imageSrc:
          "https://salt.tikicdn.com/cache/350x350/media/catalog/producttmp/82/f7/c6/17ed026a0c3f14b2ee67229126b09822.png.webp",
        price: 448000,
        description:
          "Tã quần Bobby mới- Lõi nén thần kì 3mm- Siêu mỏng khô thoáng là cuộc cách mạng mới trong ngành tã trẻ em. Mỏng không tưởng - Thấm hút bất ngờ.Với công nghệ ép lõi đột phá từ Nhật Bản giúp tã :Siêu m... ",
      },
      {
        id: "11",
        tab_id: "#tab-3",
        sub_category_id: "taQuan",
        label: "Tã quần Huggies Dry Tràm Trà Tự Nhiên MEGA JUMBO",
        imageSrc:
          "https://salt.tikicdn.com/cache/350x350/media/catalog/producttmp/fc/9d/62/43af15ac77d2974395a52bc9990cb0d0.jpg.webp",
        price: 448000,
        description:
          "Tã quần Bobby mới- Lõi nén thần kì 3mm- Siêu mỏng khô thoáng là cuộc cách mạng mới trong ngành tã trẻ em. Mỏng không tưởng - Thấm hút bất ngờ.Với công nghệ ép lõi đột phá từ Nhật Bản giúp tã :Siêu m... ",
      },
      {
        id: "12",
        tab_id: "#tab-3",
        sub_category_id: "traiCayNoiDia",
        label: "Combo 5 Dừa Trọc Xiêm Xanh Size (300-350g/trái)",
        price: 44000,
        description:
          "Tã quần Bobby mới- Lõi nén thần kì 3mm- Siêu mỏng khô thoáng là cuộc cách mạng mới trong ngành tã trẻ em. Mỏng không tưởng - Thấm hút bất ngờ.Với công nghệ ép lõi đột phá từ Nhật Bản giúp tã :Siêu m... ",
        imageSrc:
          "	https://salt.tikicdn.com/cache/280x280/ts/product/17/79/52/b2126ab60477a251d85ac51f6bced235.jpg.webp",
      },
      {
        id: "13",
        tab_id: "#tab-3",
        sub_category_id: "traiCayNoiDia",
        label: "Thanh long ruột đỏ Mekostar (1 - 1.2kg)",
        price: 44000,
        description:
          "Tã quần Bobby mới- Lõi nén thần kì 3mm- Siêu mỏng khô thoáng là cuộc cách mạng mới trong ngành tã trẻ em. Mỏng không tưởng - Thấm hút bất ngờ.Với công nghệ ép lõi đột phá từ Nhật Bản giúp tã :Siêu m... ",
        imageSrc:
          "https://salt.tikicdn.com/cache/280x280/ts/product/cd/b2/9e/7dbb44279106baa3c535e848964e4ca2.jpg.webp",
      },
      {
        id: "14",
        tab_id: "#tab-4",
        sub_category_id: "traiCayNoiDia",
        label: "Đu đủ giống Đài Loan Mekostar (500 - 900g)",
        price: 44000,
        description:
          "Tã quần Bobby mới- Lõi nén thần kì 3mm- Siêu mỏng khô thoáng là cuộc cách mạng mới trong ngành tã trẻ em. Mỏng không tưởng - Thấm hút bất ngờ.Với công nghệ ép lõi đột phá từ Nhật Bản giúp tã :Siêu m... ",
        imageSrc:
          "https://salt.tikicdn.com/cache/280x280/ts/product/76/20/e6/2b12c6426cfee8c17d5a1a4e735e90ea.jpg.webp",
      },
      {
        id: "15",
        tab_id: "#tab-4",
        sub_category_id: "traiCayNhapKhau",
        label: "Lê Nam Phi 400g",
        price: 44000,
        description:
          "Tã quần Bobby mới- Lõi nén thần kì 3mm- Siêu mỏng khô thoáng là cuộc cách mạng mới trong ngành tã trẻ em. Mỏng không tưởng - Thấm hút bất ngờ.Với công nghệ ép lõi đột phá từ Nhật Bản giúp tã :Siêu m... ",
        imageSrc:
          "	https://salt.tikicdn.com/cache/280x280/ts/product/6d/56/ea/579ca9ce5da201e7cfc506c081e9516c.jpg.webp",
      },
      {
        id: "16",
        tab_id: "#tab-4",
        sub_category_id: "traiCayNhapKhau",
        label: "Kiwi Vàng 500g",
        price: 44000,
        description:
          "Tã quần Bobby mới- Lõi nén thần kì 3mm- Siêu mỏng khô thoáng là cuộc cách mạng mới trong ngành tã trẻ em. Mỏng không tưởng - Thấm hút bất ngờ.Với công nghệ ép lõi đột phá từ Nhật Bản giúp tã :Siêu m... ",
        imageSrc:
          "https://salt.tikicdn.com/cache/280x280/ts/product/2a/02/6b/50aad2ff9cd35c9cc907586d2c31be65.jpg.webp",
      },
      {
        id: "17",
        tab_id: "#tab-5",
        sub_category_id: "traiCayNhapKhau",
        label: "Kiwi Vàng 500g",
        price: 44000,
        description:
          "Tã quần Bobby mới- Lõi nén thần kì 3mm- Siêu mỏng khô thoáng là cuộc cách mạng mới trong ngành tã trẻ em. Mỏng không tưởng - Thấm hút bất ngờ.Với công nghệ ép lõi đột phá từ Nhật Bản giúp tã :Siêu m... ",
        imageSrc:
          "https://salt.tikicdn.com/cache/280x280/ts/product/2a/02/6b/50aad2ff9cd35c9cc907586d2c31be65.jpg.webp",
      },
      {
        id: "18",
        tab_id: "#tab-5",
        sub_category_id: "tablet",
        label:
          "Máy Tính Bảng Samsung Galaxy Tab S7 FE LTE T735 (4GB/64GB) - Hàng Chính Hãng",
        price: 6390000,
        description:
          "Tã quần Bobby mới- Lõi nén thần kì 3mm- Siêu mỏng khô thoáng là cuộc cách mạng mới trong ngành tã trẻ em. Mỏng không tưởng - Thấm hút bất ngờ.Với công nghệ ép lõi đột phá từ Nhật Bản giúp tã :Siêu m... ",
        imageSrc:
          "https://salt.tikicdn.com/cache/350x350/ts/product/f1/1d/b1/1b81efd33683c930ee9cf9d9ec3c37b6.jpg.webp",
      },
      {
        id: "19",
        tab_id: "#tab-6",
        sub_category_id: "tablet",
        label:
          "Máy tính bảng Samsung Galaxy Tab A8 (4GB/64GB) - Hàng Chính Hãng",
        price: 8390000,
        description:
          "Tã quần Bobby mới- Lõi nén thần kì 3mm- Siêu mỏng khô thoáng là cuộc cách mạng mới trong ngành tã trẻ em. Mỏng không tưởng - Thấm hút bất ngờ.Với công nghệ ép lõi đột phá từ Nhật Bản giúp tã :Siêu m... ",
        imageSrc:
          "https://salt.tikicdn.com/cache/350x350/ts/product/2d/4f/75/fc9ea72b1fadf344e3db1e5cc681b6d3.jpg.webp",
      },
      {
        id: "20",
        tab_id: "#tab-6",
        sub_category_id: "smartphone",
        label: "Điện thoại Samsung Galaxy A23 (4GB/128GB) - Hàng chính hãng",
        price: 4390000,
        description:
          "Tã quần Bobby mới- Lõi nén thần kì 3mm- Siêu mỏng khô thoáng là cuộc cách mạng mới trong ngành tã trẻ em. Mỏng không tưởng - Thấm hút bất ngờ.Với công nghệ ép lõi đột phá từ Nhật Bản giúp tã :Siêu m... ",
        imageSrc:
          "	https://salt.tikicdn.com/cache/350x350/ts/product/88/d9/b6/085fe275305d0f707091815b401e2190.jpg.webp",
      },
      {
        id: "21",
        tab_id: "#tab-7",
        sub_category_id: "smartphone",
        label: "Điện thoại Samsung Galaxy A23 (4GB/128GB) - Hàng chính hãng",
        price: 3390000,
        description:
          "Tã quần Bobby mới- Lõi nén thần kì 3mm- Siêu mỏng khô thoáng là cuộc cách mạng mới trong ngành tã trẻ em. Mỏng không tưởng - Thấm hút bất ngờ.Với công nghệ ép lõi đột phá từ Nhật Bản giúp tã :Siêu m... ",
        imageSrc:
          "	https://salt.tikicdn.com/cache/350x350/ts/product/94/0d/ea/3aaaee95221be40d932ed082043550bb.jpg.webp",
      },
      {
        id: "22",
        tab_id: "#tab-7",
        sub_category_id: "smartphone",
        label:
          "Điện thoại Samsung Galaxy Z Flip 4 (8GB/128GB) - Hàng chính hãng",
        price: 19390000,
        description:
          "Tã quần Bobby mới- Lõi nén thần kì 3mm- Siêu mỏng khô thoáng là cuộc cách mạng mới trong ngành tã trẻ em. Mỏng không tưởng - Thấm hút bất ngờ.Với công nghệ ép lõi đột phá từ Nhật Bản giúp tã :Siêu m... ",
        imageSrc:
          "https://salt.tikicdn.com/cache/350x350/ts/product/2c/d5/3a/9b98c992a59ea419e60aaae9703fe59f.png.webp",
      },
    ],

    userAccount: {
      user_id: 1,
      full_name: "Nguyen Van A",
      nickName: "A",
      date_of_birth: "20/10/1999",
      gender: "man",
      nationality: "Viet Nam",
      phone_number: "012345678",
      email: "nguyenvana@gmail.com",
      facebook_link: "https://www.facebook.com/NguyenVanA/",
      google_link: "https://www.google.com/NguyenVanA/",
      password: "a123456789b",
      avavtar:
        "https://img.freepik.com/premium-vector/person-avatar-design_24877-38137.jpg?w=2000",
    },
    order: {
      order_id: randomString(),
      product_list: [],
      user_id: "",
      ship_fee: 0,
      voucher: "",
      total: 0,
      buy_time: "",
      expected_shipping_time: "",
    },
    
    orderexp: {
      order_id: "U6ojtKeTILVE",
      product_list: [
        {
          product_id: 1,
          quantity: 5,
          price: 202000,
        },
        {
          product_id: 2,
          quantity: 3,
          price: 100000,
        },
        {
          product_id: 2,
          quantity: 5,
          price: 200000,
        },
      ],
      user_id: "",
      ship_fee: 0,
      voucher: "",
      total: 1310000,
      buy_time: "2022-09-23T07:50:48.305Z",
      expected_shipping_time: "",
    },
    newItemSwiperHomePage: [
      {
        id: "#tab-1",
        label: "Cho bạn",
        href: "#",
        imageSrc:
          "https://salt.tikicdn.com/cache/w100/ts/personalish/f9/27/b5/3a8e2286a1c8fb91b67acc5ee35f82f0.png.webp",
      },
      {
        id: "#tab-2",
        label: "Dịch Vụ Số",
        href: "#",
        imageSrc:
          "https://salt.tikicdn.com/cache/w100/ts/personalish/08/b8/5c/5c6327fd3cf12c534bff4a55dab2f12d.png.webp",
      },
      {
        id: "#tab-3",
        label: "Deal Hot",
        href: "#",
        imageSrc:
          "https://salt.tikicdn.com/cache/w100/ts/personalish/41/99/9a/8898607d7fca4b79775a708c57a8152f.png.webp",
      },
      {
        id: "#tab-4",
        label: "Rẻ Vô Đối",
        href: "#",
        imageSrc:
          "https://salt.tikicdn.com/cache/w100/ts/personalish/0f/59/9d/215fa18ef72e430eefcbfe5355cab8e2.png.webp",
      },
      {
        id: "#tab-5",
        label: "Hàng Mới",
        href: "#",
        imageSrc:
          "https://salt.tikicdn.com/cache/w100/ts/personalish/7d/8a/6e/d8b76e2c43cbd06b7e1aa3ab8c54df64.png.webp",
      },
      {
        id: "#tab-6",
        label: "Thời Trang",
        href: "#",
        imageSrc:
          "https://salt.tikicdn.com/cache/w100/ts/personalish/dc/f1/b1/6ba9e529785de3ad1a81b9c569d05aa0.png.webp",
      },
      {
        id: "#tab-7",
        label: "Trending",
        href: "#",
        imageSrc:
          "https://salt.tikicdn.com/cache/w100/ts/personalish/b9/e1/a9/65ad8ac4e167c5009ae3f7c80395a5a4.png.webp",
      },
    ],
    ViewProduct1st: [
      {
        id: 1,
        carouselImg:
          "https://salt.tikicdn.com/cache/280x280/ts/product/6b/98/82/8d6ef80eb54c5fb1e2d8f6e74de9ca6c.jpg.webp",
        label: "Chú Thuật Hồi Chiến - Tập 7",
        price: 30000,
        descriptionImg:
          "https://salt.tikicdn.com/cache/w750/ts/product/6b/98/82/8d6ef80eb54c5fb1e2d8f6e74de9ca6c.jpg.webp",
        description:
          "Chú linh đặc cấp Hanami và đồng bọn đã rút lui khỏi trường chuyên chú thuật, nhưng các ngón tay của Sukuna và chú vật đặc cấp “Chú thai cửu tương đồ” đã bị đánh cắp. Cửu tương đồ có được thực thể và t... ",
      },
      {
        id: 2,
        carouselImg:
          "	https://salt.tikicdn.com/cache/w750/ts/product/ae/75/1a/bfcade5df4aaf40f5556164f5af1f51c.jpg.webp",
        label: "Apple iPhone 11",
        price: 100000,

        descriptionImg:
          "https://salt.tikicdn.com/cache/w750/ts/product/ae/75/1a/bfcade5df4aaf40f5556164f5af1f51c.jpg.webp",
        description:
          "Quay video 4K, chụp ảnh chân dung tuyệt đẹp và chụp phong cảnh rộng với hệ thống camera kép hoàn toàn mới. Chụp ảnh tối ưu trong điều kiện ánh sáng yếu với chế độ Ban Đêm. Xem ảnh, video và chơi game với màu sắc chân thực trên màn hình Liquid Retina 6.1 inch.",
      },
      {
        id: 3,
        carouselImg:
          "https://salt.tikicdn.com/cache/w750/ts/product/ae/75/1a/bfcade5df4aaf40f5556164f5af1f51c.jpg.webp",
        label:
          "Nệm Foam Goodnight Massage Nhật Bản 9cm êm ái, thoáng mát, mềm mại, nâng đỡ cơ thể tối ưu",
        price: 120000,

        descriptionImg:
          "	https://salt.tikicdn.com/cache/w750/ts/product/e9/a0/50/229e12ec25bbe65b81dc63fed2a39414.jpeg.webp",
        description:
          "Nệm ngủ chất liệu foam với khả năng massage được xem là một phát minh tuyệt vời trong lịch sử của ngành chăn ga gối nệm. Chính vì thế mà những chiếc nệm này được đại đa số người dùng yêu thích và tin tưởng lựa chọn.  Trong đó, ",
      },
      {
        id: 4,
        carouselImg:
          "https://salt.tikicdn.com/cache/w750/media/catalog/producttmp/5a/2f/1f/d3b1bc7329fc98037d95a1c210ac3fe6.jpg.webp",
        label:
          "Bình Giữ Nhiệt Lock&Lock Energetic One-Touch Tumbler LHC3249 - 550ML",
        price: 120500,

        descriptionImg:
          "https://salt.tikicdn.com/cache/w750/media/catalog/producttmp/f5/62/74/5b3e67dd37bbdad389fe8625a1ac9ad0.PNG.webp",
        description:
          "Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển, phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....",
      },
      {
        id: 5,
        carouselImg:
          "https://salt.tikicdn.com/cache/w750/ts/product/5e/18/24/2a6154ba08df6ce6161c13f4303fa19e.jpg.webp",
        label: "Cây Cam Ngọt Của Tôi",
        price: 220500,

        descriptionImg:
          "https://salt.tikicdn.com/cache/w750/ts/product/5e/18/24/2a6154ba08df6ce6161c13f4303fa19e.jpg.webp",
        description:
          "Hãy làm quen với Zezé, cậu bé tinh nghịch siêu hạng đồng thời cũng đáng yêu bậc nhất, với ước mơ lớn lên trở thành nhà thơ cổ thắt nơ bướm. Chẳng phải ai cũng công nhận khoản “đáng yêu” kia đâu nhé. Bởi vì, ở cái xóm ngoại ô nghèo ấy, nỗi khắc khổ bủa vây đã che mờ mắt người ta trước trái tim thiện lương cùng trí tưởng tượng tuyệt vời của cậu bé con năm tuổi.",
      },
    ],
    familySelected: [],
    swipePageData: [
      {
        id: 1,
        avatar:
          "https://vcdn.tikicdn.com/ts/seller/33/29/a5/fbc69d21b59b7d79216e87d36b9e52df.jpg?date=2022-11-01T05:39",
          image:"https://salt.tikicdn.com/cache/492x492/ts/social/da/41/54/aceda611db70132ae7dc092d4a287bde.jpg.webp?h=1202&w=1202",
        name: "DoriDori",
        content:`[LIVESTREAM 01/11] CÙNG ĐI TÌM CHỦ NHÂN MERCEDES 2 TỶ

        🤔 "Số gì đây - Số gì đây" 🤔 Khoảng khắc mà chúng ta đều mong chờ cuối cùng đã đến! Đón xem ngay Livestream quay thưởng "Chốt Đơn Rinh Quà" với loạt giải thưởng xịn xò lên đến 2 TỶ gồm:
        🚘 01 Giải Đặc Biệt: Xe Mercedes-Benz C200 Avantgarde trị giá 1.669.000.000 đồng
        🏍️ 01 Giải Nhất: Coupon điện tử mua Honda vision cao cấp trị giá 43.300.000 đồng
        💻 01 Giải Nhì: Apple MacBook Pro 2020 13 Inch MYDA2SA/A - Silver trị giá 28.000.000 đồng
        📱 01 Giải Ba: iPhone 13 Pro Max 128GB - Xanh Lá trị giá 26.990.000 đồng
        🖥️ 02 Giải Tư: Smart Tivi QLED Samsung 4K 65 inch QA65Q70BA - Model 2022 trị giá 23.990.000 đồng
        🎁 04 Giải Năm: Robot Hút Bụi Lau Nhà Fmart E-R550W trị giá 6.460.000 đồng
        
        👉 Xem thêm tại: `,
      },
      {id:2,
        avatar:"https://vcdn.tikicdn.com/ts/seller/c2/d9/01/43d82628cee443204b3d245a54c591cb.jpg?date=2022-11-01T04:49",
        image:"https://salt.tikicdn.com/cache/492x492/ts/social/0a/04/43/e8c5c23d3d87f92274cacc25568c9fef.jpg.webp?h=900&w=900",
        name: "Điện máy tiện lợi s52",
        content:`Full video feedback từ khách hàng yêu của Điện máy s52!!!

        📷 Bất kể nắng mưa - Cần là có S52 giao ngay.`
      },
      {id:3,
        avatar:"https://salt.tikicdn.com/cache/w220/ts/seller/38/e6/69/f4802711b0158c1e1d4c84db5de0bf55.jpg.webp?date=2022-11-01T04:49",
        image:"https://salt.tikicdn.com/cache/480x854/ts/social/61/80/3a/dc044fc5fa15d4435e0e64322cf8a0cb.jpg.webp?h=854&w=480",
        name: "Thế giới pha chế ",
        content:`Máy xay, máy ép, máy làm sữa hạt cao cấp của thương hiệu Promix & Yubann đã có mặt tại "Thế giới pha chế" mọi người nhé `
      },
      {id:4,
        avatar:"https://vcdn.tikicdn.com/ts/seller/f4/db/03/cd2ebfaf3382145274300555305fcf62.jpg?date=2022-11-01T04:49",
        image:"https://salt.tikicdn.com/cache/280x280/ts/product/10/24/67/382cc422356f943a33ac67d7b2742ce6.jpg.webp",
        name: "Shop Ngọc Bích ",
        content:`Cặp Đa Năng Lugbro Biz được trang bị ngăn lưới chứa quần áo rộng rãi, ngăn laptop có lớp đệm chống sốc bảo vệ đồ dùng tố`
      },
      {id:5,
        avatar:"https://vcdn.tikicdn.com/ts/seller/f4/db/03/cd2ebfaf3382145274300555305fcf62.jpg?date=2022-11-01T04:49",
        image:"	https://salt.tikicdn.com/cache/542x542/ts/review/f6/87/76/176fe2c0eacefc21d91ad2d844482f8e.jpg.webp",
        name: "Sách Thiện Tri Thức",
        content:`Cặp Đa Năng Lugbro Biz được trang bị ngăn lưới chứa quần áo rộng rãi, ngăn laptop có lớp đệm chống sốc bảo vệ đồ dùng tố`
      },
      {id:6,
      avatar:"https://vcdn.tikicdn.com/ts/seller/e8/09/c9/d7ba4998e3f8db0139e9864134770b8a.jpg?date=2022-10-23T06:50",
      image:"https://salt.tikicdn.com/cache/492x492/ts/social/d2/c8/da/3605b5cb9c5a6784d0ac0afa7db27ff3.jpg.webp?h=960&w=960",
      name:"Hồng Hạnh Mobile",
    content:`💰 DEAL HOÀNH TRÁNG - NÂNG CẤP 'DẾ' CHO NÀNG 💐 📱 GHÉ HỒNG HẠNH MOBILE - NHANH TAY CHỐT ĐƠN NGAY 🔷 Mua HÀNG CHÍNH HÃNG`}
    ],
    quickLinkData: [
      {
        id: 1,
        img: "https://salt.tikicdn.com/cache/w100/ts/upload/b4/e8/d7/2ad7cd9c50a55d90bedc72c6104a2ee1.png.webp",
        label: "Thưởng thêm Astra",
      },
      {
        id: 2,
        img: "https://salt.tikicdn.com/cache/w100/ts/upload/4a/71/64/7de7d35e452413161ce86c3100f29d45.png.webp",
        label: "Trúng Mercedes C200",
      },
      {
        id: 3,
        img: "https://salt.tikicdn.com/cache/w100/ts/upload/98/73/ab/dbebb97112f48def572707aa23774cd7.png.webp",
        label: "Trúng 1000 Astra",
      },
      {
        id: 4,
        img: "https://salt.tikicdn.com/cache/w100/ts/upload/68/9c/2f/6fc82a9a9713a2c2b1968e9760879f6e.png.webp",
        label: "Đi chợ siêu tốc",
      },
      {
        id: 5,
        img: "	https://salt.tikicdn.com/cache/w100/ts/upload/52/50/73/0788d5207ec8b82e05859dfe953a4327.png.webp",
        label: "Đóng tiền, nạp thẻ",
      },
      {
        id: 6,
        img: "https://salt.tikicdn.com/cache/w100/ts/upload/b4/e8/d7/2ad7cd9c50a55d90bedc72c6104a2ee1.png.webp",
        label: "Hoàn tiền 15%",
      },
      {
        id: 7,
        img: "	https://salt.tikicdn.com/cache/w100/ts/upload/4a/b2/c5/b388ee0e511889c83fab1217608fe82f.png.webp",
        label: "Ưu đãi đối tác",
      },
    ],
    carouselHomePage:[
      {
        id:1,
        img:"https://salt.tikicdn.com/cache/w750/ts/banner/f4/ce/03/e42ea95ef5fa1119de0decda70cb4812.png.webp",
        label:"Deal Thanh Toán-Ưu Đãi Cực Sốc"
      },
      {
        id:2,
        img:"	https://salt.tikicdn.com/cache/w750/ts/banner/0b/05/36/5cf829c6ea09326436c0bf7178093f7d.png.webp",
        label:"Deal Dế Yêu Siêu Xịn - Giá Sốc Bất Ngờ"
      },
      {
        id:3,
        img:"https://salt.tikicdn.com/cache/w750/ts/banner/60/63/eb/33cf947f2bbc90efc545bd56f1061921.png.webp",
        label:"Thăng Hạng Dễ Dàng - Không Ràng Điều Kiện"
      },
    ],
    tiniAppData: [
      { id: 1, img: "	https://salt.tikicdn.com/cache/w100/ts/miniapp/3d/00/07/a4385accd2d5de726d6f7b90be1328af.png.webp ", label: "Infina - Đầu tư & Tích lũy" },
      { id: 2, img: "https://salt.tikicdn.com/cache/w100/ts/miniapp/92/03/9c/7a30c39073c9111e6f608d8936633b27.png.webp", label: "Đặt hoa & quà 20/10" },
      { id: 3, img: "	https://salt.tikicdn.com/cache/w100/ts/miniapp/7c/d3/5d/d6d81bde2b8da3d4d7d691539884b19a.png.webp", label: "Điện" },
      { id: 4, img: "https://salt.tikicdn.com/cache/w100/ts/miniapp/63/5f/ca/28a5f795f32641010c78c7f77ab1496e.png.webp", label: "Nước" },
      { id: 5, img: "	https://salt.tikicdn.com/cache/w100/ts/tiniapp/72/50/fb/730bbbe5c606f828e71da444e406e6ee.png.webp", label: "Xem tất cả" },
    ],
  },
  getters: {
    user({ state }) {
      return state.user;
    },
    products({ state }) {
      return state.products;
    },
    getDataFirstSlider({ state }) {
      return state.dataFirstSlider;
    },
    getProductsElement({ state }) {
      return state.productsElement;
    },
    getMusicSongList({ state }) {
      return state.musicSongList;
    },
    getProductSwipper({ state }) {
      return state.productSwipper;
    },
    getStyleSubCate({ state }) {
      return state.styleSubCate;
    },
    getDataSecondSwipper({ state }) {
      return state.dataSecondSwipper;
    },
    getDataCharTab({ state }) {
      return state.dataCharTab;
    },
    getDataCharComponent({ state }) {
      return state.dataCharComponent;
    },
    getDataCharComponent2({ state }) {
      return state.dataCharComponent2;
    },
    getDataSmartPhoneMarket({ state }) {
      return state.dataSmartPhoneMarket;
    },
    getProdcutsInformationData({ state }) {
      return state.prodcutsInformationData;
    },
    getProductDescriptionData({ state }) {
      return state.productDescriptionData;
    },
    getUserAccount({ state }) {
      return state.userAccount;
    },
    getOrder({ state }) {
      return state.order;
    },
    getProducts({ state }) {
      return state.products;
    },
    getOrderexp({ state }) {
      return state.orderexp;
    },
    getNewItemSwiperHomePage({ state }) {
      return state.newItemSwiperHomePage;
    },
    getnewViewProduct({ state }) {
      return state.newViewProduct;
    },
    getCategoryItem({ state }) {
      return state.categoryItem;
    },
    getFamilySelected({ state }) {
      return state.familySelected;
    },
    getSubCategoryItem({ state }) {
      return state.subCategoryItem;
    },
    getProductsStyleSubCate({ state }) {
      return state.productsStyleSubCate;
    },
    getCampainSlide({ state }) {
      return state.campaignSlide;
    },
    getProgramSlide({ state }) {
      return state.programSlide;
    },
    getSwipeFirstTagData({ state }) {
      return state.swipeFirstTagData;
    },
    getQuickLinkData({ state }) {
      return state.quickLinkData;
    },
    getTiniAppData({state}){
      return state.tiniAppData;
    },
    getCarouselHomePage({state}){
      return state.carouselHomePage
    },
    getCarouselContainerData({state}){
      return state.carouselContainerData
    },
    getSwipePageData({state}){
      return state.swipePageData
    }
  },
  actions: {
    setUser({ state }, data) {
      state.user = { ...state.user, ...data };
    },
    addProduct({ state }, product) {
      state.products = [...state.products, product];
    },
    updateDataFirstSlider({ state }, data) {
      return [...state.dataFirstSlider, ...data];
    },
    addDataFirstSlider({ state }, data) {
      return [...state.dataFirstSlider, data];
    },
    setDataFirstSlider({ state }, data) {
      return (state.dataFirstSlider = data);
    },
    setMusicSongList({ state }, data) {
      return (state.musicSongList = data);
    },
    setProductSwipper({ state }, data) {
      return (state.productSwipper = data);
    },
    setStyleSubCate({ state }, data) {
      return (state.styleSubCate = data);
    },
    setDataSecondSwipper({ state }, data) {
      return (state.dataSecondSwipper = data);
    },
    setDataCharTab({ state }, data) {
      return (state.dataCharTab = data);
    },
    setDataCharComponent({ state }, data) {
      return (state.dataCharComponent = data);
    },
    setOrder({ state }, data) {
      return (state.order = data);
    },
    setNewItemSwiperHomePage({ state }, data) {
      return (state.order = data);
    },
    setFamilySelected({ state }, data) {
      return (state.familySelected = data);
    },
    setProductsStyleSubCate({state}, data){
      return (state.productsStyleSubCate = data);
    }
  },
});

export default store;

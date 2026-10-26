// Sửa ngày, giờ và địa điểm tại EVENT. Để "" để giữ dòng trống.
const EVENT = {
  date: "07/11/2026",
  time: "7h30",
  location: "Khu Công nghệ cao TP.HCM, Đường D1, P.Long Thạnh Mỹ, Tăng Nhơn Phú, Hồ Chí Minh"
};

const GUESTS = [
  {
    id: "van",
    name: "Vân",
    initial: "V",
    type: "Gửi con em Vân",
    salutation: "Vân khùng ơi,",
    message: [
      "Anh sắp tốt nghiệp thạc sĩ rồi, mời em tới chung vui với anh nha. Bữa đó bớt khùng chút, nhường anh làm nhân vật chính một hôm.",
      "Sắp xếp ghé chụp với anh vài tấm hình kỷ niệm nhé. Nhớ tới đúng giờ, đừng đợi anh nhận bằng xong mới hỏi đang ở đâu!"
    ],
    closing: "Hẹn gặp em, tới rồi khùng tiếp!"
  },
  {
    id: "bao",
    name: "Đặng Đức Bảo",
    initial: "B",
    type: "Người anh thân thiết",
    salutation: "Gửi anh Bảo",
    message: [
      "Anh Bảo ơi, em sắp tốt nghiệp thạc sĩ rồi. Em mời anh đến dự lễ tốt nghiệp và chung vui với em nha.",
      "Hôm đó nếu anh sắp xếp được thì ghé chụp với em vài tấm hình kỷ niệm. Có anh đến em sẽ vui lắm."
    ],
    closing: "Hẹn gặp anh tại buổi lễ nhé!"
  },
  { id: "quan", name: "Lê Minh Quân", initial: "Q", type: "Cốt iu", salutation: "Gửi Quân — cốt iu của Hiệp", message: ["Cốt của Hiệp ơi, Hiệp sắp tốt nghiệp thạc sĩ rồi nè! Ngày vui này mà có cốt đứng cạnh, cười cùng và chụp chung một tấm hình thì còn gì bằng.", "Thư này gửi riêng cho cốt đó. Hôm ấy ráng sắp xếp đến với Hiệp nha, mình gặp nhau, tám chuyện và chụp hình cho đã. Có một đứa bạn thân đến chung vui là Hiệp thấy ngày đó đủ đầy hơn nhiều rồi.", "Chúc cốt luôn vững vàng với điều mình chọn, làm nghiên cứu có niềm vui và nhớ dành thời gian nghỉ ngơi nữa nha. Chặng đường phía trước, mong tụi mình còn được mừng thật nhiều cột mốc của nhau."], closing: "Đến với Hiệp nha cốt. Thương Quân nhiều!" },
  { id: "loc", name: "Phạm Quang Lộc", initial: "L", type: "Cốt iu", salutation: "Gửi Lộc — cốt iu của Hiệp", message: ["Lộc ơi, báo tin vui cho cốt nè: Hiệp sắp được mặc áo tốt nghiệp thạc sĩ rồi! Hiệp muốn hôm đó có Lộc đến, để tấm hình ngày tốt nghiệp có thêm gương mặt đứa bạn thân của mình.", "Cốt đến chung vui với Hiệp nha. Chẳng cần quà cáp gì đâu, có mặt, cười thật tươi và chụp với Hiệp vài tấm hình là quý lắm rồi. Mình giữ lại một kỷ niệm để sau này nhìn lại còn có chuyện mà kể.", "Chúc cốt bớt những ngày căng thẳng, thêm những ngày vui, luôn tin vào bản thân và đi được đến nơi mình muốn. Mong cả hai đứa mình đều sẽ có thật nhiều tin vui để khoe với nhau."], closing: "Hẹn gặp Lộc nha cốt. Có cốt là vui thêm một khúc!" },
  {
    id: "thao",
    name: "Trần Phương Thảo",
    initial: "T",
    type: "Gửi em Thảo",
    salutation: "Gửi Thảo",
    message: [
      "Thảo ơi, anh sắp tốt nghiệp thạc sĩ rồi. Anh mời em đến dự lễ và chung vui với anh nha.",
      "Hôm đó nếu sắp xếp được thì em ghé, chụp với anh vài tấm hình kỷ niệm nhé!"
    ],
    closing: "Hẹn gặp em hôm đó nha!"
  },
  {
    id: "thay-thinh",
    name: "Thầy Bùi Quang Thịnh",
    initial: "T",
    type: "Kính mời Thầy",
    salutation: "Kính gửi Thầy",
    message: [
      "Em kính mời Thầy đến tham dự lễ tốt nghiệp thạc sĩ của em, Huỳnh Văn Hiệp.",
      "Em cảm ơn Thầy đã tận tình hướng dẫn, giúp đỡ và tạo điều kiện cho em trong suốt quá trình học tập, nghiên cứu. Nhờ sự chỉ bảo và động viên của Thầy, em mới có thể hoàn thành chặng đường này và có được ngày hôm nay.",
      "Em rất mong Thầy có thể đến chung vui và chụp cùng em một tấm hình kỷ niệm. Em kính chúc Thầy nhiều sức khỏe và luôn giữ được niềm vui trong công việc."
    ],
    closing: "Em chân thành cảm ơn và trân trọng kính mời Thầy."
  },
  {
    id: "co-phuong",
    name: "Cô Ngô Thị Mỹ Phượng",
    initial: "P",
    type: "Kính mời Cô",
    salutation: "Kính gửi Cô",
    message: [
      "Em kính mời Cô đến tham dự lễ tốt nghiệp thạc sĩ của em, Huỳnh Văn Hiệp.",
      "Để có được ngày hôm nay, em rất biết ơn sự hướng dẫn và giúp đỡ của Thầy. Trong ngày vui này, em mong được đón cả Thầy và Cô đến chung vui, chụp cùng em vài tấm hình kỷ niệm.",
      "Em kính chúc Cô nhiều sức khỏe, niềm vui và mong được gặp Cô tại buổi lễ."
    ],
    closing: "Em trân trọng kính mời Cô."
  }
];


const $ = id => document.getElementById(id);
const screens = ["cover", "letter-screen", "unavailable"];
// Trang riêng ưu tiên người nhận đã gắn trong HTML. Link ?to=... vẫn dùng được.
const embeddedId = document.querySelector('meta[name="recipient-id"]')?.content;
const pathId = window.location.pathname.replace(/^\/+|\/+$/g, "");
const guestId = embeddedId || (pathId && pathId !== "index.html" ? pathId : new URLSearchParams(window.location.search).get("to"));
const guest = GUESTS.find(person => person.id === guestId);
function showScreen(id, focusId) {
  screens.forEach(screen => $(screen).hidden = screen !== id);
  window.scrollTo({ top: 0, behavior: "instant" });
  if (focusId) $(focusId).focus({ preventScroll: true });
}
function fillEvent(id, value, label) {
  const el = $(id);
  el.replaceChildren();
  if (value.trim()) el.textContent = value;
  else {
    const line = document.createElement("span");
    line.className = "empty-field";
    line.setAttribute("role", "img");
    line.setAttribute("aria-label", label + " chưa điền");
    el.append(line);
  }
}
function openLetter() {
  if (!guest) return;
  $("recipient").textContent = guest.name;
  $("salutation").textContent = guest.salutation;
  $("message").replaceChildren(...guest.message.map(text => {
    const p = document.createElement("p"); p.textContent = text; return p;
  }));
  $("closing").textContent = guest.closing;
  fillEvent("event-date", EVENT.date, "Ngày tổ chức");
  fillEvent("event-time", EVENT.time, "Thời gian");
  fillEvent("event-location", EVENT.location, "Địa điểm");
  showScreen("letter-screen", "letter-title");
}
if (guest) {
  document.title = "Thư mời " + guest.name + " · Huỳnh Văn Hiệp";
  $("cover-recipient").textContent = "Dành riêng cho " + guest.name;
} else {
  showScreen("unavailable", "unavailable-title");
}
$("open-envelope").addEventListener("click", () => {
  if (!guest) return;
  const button = $("open-envelope");
  button.disabled = true; button.classList.add("opening");
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  setTimeout(() => {
    openLetter(); button.classList.remove("opening"); button.disabled = false;
  }, reduced ? 0 : 1050);
});
$("back-envelope").addEventListener("click", () => showScreen("cover", "open-envelope"));
$("print-letter").addEventListener("click", () => window.print());

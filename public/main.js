// Sửa ngày, giờ và địa điểm tại EVENT. Để "" để giữ dòng trống.
const EVENT = {
  date: "",
  time: "",
  location: ""
};

const GUESTS = [
  { id: "bao", name: "Đặng Đức Bảo", initial: "B", type: "Anh Bảo thương quý", salutation: "Gửi người bạn thương quý", message: ["Bảo ơi, Hiệp có một niềm vui muốn chia sẻ cùng Bảo: Hiệp sắp chính thức tốt nghiệp thạc sĩ rồi!", "Hiệp thân mời Bảo đến dự lễ tốt nghiệp, cùng chụp một tấm hình kỷ niệm và chia sẻ niềm vui trong ngày đặc biệt này. Có Bảo ở đó, buổi lễ sẽ ý nghĩa hơn rất nhiều."], closing: "Hẹn gặp Bảo trong ngày vui của Hiệp nhé!" },
  { id: "quan", name: "Lê Minh Quân", initial: "Q", type: "Cốt iu", salutation: "Gửi Quân — cốt iu của Hiệp", message: ["Quân ơi, cốt của Hiệp ơi, Hiệp sắp tốt nghiệp thạc sĩ rồi nè! Ngày vui này mà có cốt đứng cạnh, cười cùng và chụp chung một tấm hình thì còn gì bằng.", "Thư này gửi riêng cho cốt đó. Hôm ấy ráng sắp xếp đến với Hiệp nha, mình gặp nhau, tám chuyện và chụp hình cho đã. Có một đứa bạn thân đến chung vui là Hiệp thấy ngày đó đủ đầy hơn nhiều rồi.", "Chúc cốt luôn vững vàng với điều mình chọn, làm nghiên cứu có niềm vui và nhớ dành thời gian nghỉ ngơi nữa nha. Chặng đường phía trước, mong tụi mình còn được mừng thật nhiều cột mốc của nhau."], closing: "Đến với Hiệp nha cốt. Thương Quân nhiều!" },
  { id: "loc", name: "Phạm Quang Lộc", initial: "L", type: "Cốt iu", salutation: "Gửi Lộc — cốt iu của Hiệp", message: ["Lộc ơi, báo tin vui cho cốt nè: Hiệp sắp được mặc áo tốt nghiệp thạc sĩ rồi! Hiệp muốn hôm đó có Lộc đến, để tấm hình ngày tốt nghiệp có thêm gương mặt đứa bạn thân của mình.", "Cốt đến chung vui với Hiệp nha. Chẳng cần quà cáp gì đâu, có mặt, cười thật tươi và chụp với Hiệp vài tấm hình là quý lắm rồi. Mình giữ lại một kỷ niệm để sau này nhìn lại còn có chuyện mà kể.", "Chúc cốt bớt những ngày căng thẳng, thêm những ngày vui, luôn tin vào bản thân và đi được đến nơi mình muốn. Mong cả hai đứa mình đều sẽ có thật nhiều tin vui để khoe với nhau."], closing: "Hẹn gặp Lộc nha cốt. Có cốt là vui thêm một khúc!" },
  { id: "thao", name: "Trần Phương Thảo", initial: "T", type: "Em thương quý", salutation: "Gửi Thảo", message: ["Thảo ơi, Hiệp gửi Thảo một lời mời nhỏ cho một ngày thật đặc biệt: ngày Hiệp tốt nghiệp thạc sĩ.", "Hiệp rất vui nếu Thảo có thể đến dự lễ, cùng chúc mừng và lưu lại những tấm hình kỷ niệm. Sự hiện diện của Thảo sẽ là một phần thật đẹp trong ngày vui này."], closing: "Mong được gặp Thảo trong ngày tốt nghiệp!" },
  { id: "my", name: "VK CK My", initial: "M", type: "Một người đặc biệt", salutation: "Gửi người đặc biệt", message: ["My ơi, ngày Hiệp khoác lên mình chiếc áo tốt nghiệp thạc sĩ sắp đến rồi. Hiệp muốn dành riêng một lời mời thật ấm áp gửi đến My.", "Mong My có mặt trong khoảnh khắc này, cùng Hiệp mỉm cười, chụp những tấm hình thật đẹp và đón một dấu mốc mới. Có My bên cạnh, niềm vui của Hiệp sẽ thêm trọn vẹn."], closing: "Dành một chỗ thật đặc biệt cho My trong ngày vui này." },
  { id: "thay-thinh", name: "Thầy Bùi Quang Thịnh", initial: "T", type: "Kính mời Thầy", salutation: "Kính gửi", message: ["Em kính mời Thầy Bùi Quang Thịnh đến tham dự lễ tốt nghiệp thạc sĩ của em, Huỳnh Văn Hiệp.", "Với em, đây là một dấu mốc đáng trân trọng trên hành trình học tập. Em rất vinh dự nếu được đón Thầy đến chung vui và cùng lưu lại những hình ảnh kỷ niệm trong ngày đặc biệt này.", "Em kính chúc Thầy nhiều sức khỏe và mong được đón tiếp Thầy tại buổi lễ."], closing: "Em trân trọng kính mời Thầy." },
  { id: "co-phuong", name: "Cô Ngô Thị Mỹ Phượng", initial: "P", type: "Kính mời Cô", salutation: "Kính gửi", message: ["Em kính mời Cô Ngô Thị Mỹ Phượng đến tham dự lễ tốt nghiệp thạc sĩ của em, Huỳnh Văn Hiệp.", "Em mong được chia sẻ niềm vui và dấu mốc ý nghĩa này cùng Cô. Sự hiện diện của Cô sẽ là niềm vinh dự đối với em, đồng thời làm cho ngày tốt nghiệp thêm ấm áp và đáng nhớ.", "Em kính chúc Cô nhiều sức khỏe và mong có dịp chụp cùng Cô một tấm hình kỷ niệm tại buổi lễ."], closing: "Em trân trọng kính mời Cô." }
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
  window.scrollTo({top: 0, behavior: "instant"});
  if (focusId) $(focusId).focus({preventScroll: true});
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

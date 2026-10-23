    const EVENT = {
      date: "",
      time: "",
      location: ""
    };

    const GUESTS = [
      { id: "bao", name: "Đặng Đức Bảo", initial: "B", type: "Anh Bảo thương quý", salutation: "Gửi người bạn thương quý", message: ["Bảo ơi, Hiệp có một niềm vui muốn chia sẻ cùng Bảo: Hiệp sắp chính thức tốt nghiệp thạc sĩ rồi!", "Hiệp thân mời Bảo đến dự lễ tốt nghiệp, cùng chụp một tấm hình kỷ niệm và chia sẻ niềm vui trong ngày đặc biệt này. Có Bảo ở đó, buổi lễ sẽ ý nghĩa hơn rất nhiều."], closing: "Hẹn gặp Bảo trong ngày vui của Hiệp nhé!" },
      { id: "quan", name: "Lê Minh Quân", initial: "Q", type: "Cốt iu", salutation: "Gửi Quân", message: ["Cốt ơi, một chặng đường học tập của Hiệp sắp khép lại bằng lễ tốt nghiệp thạc sĩ. Hiệp muốn gửi đến Quân lời mời thật đặc biệt này.", "Mong Quân dành chút thời gian đến chung vui, cùng Hiệp lưu lại khoảnh khắc đáng nhớ. Hôm đó mình gặp nhau, trò chuyện và chụp thật nhiều hình nhé!"], closing: "Có Quân chung vui, Hiệp sẽ vui hơn nhiều!" },
      { id: "loc", name: "Phạm Quang Lộc", initial: "L", type: "Cốt iu", salutation: "Gửi Lộc", message: ["Cốt ơi, Hiệp sắp tốt nghiệp thạc sĩ rồi! Một dấu mốc thật đáng nhớ, và Hiệp rất muốn có Lộc ở đó để cùng chia sẻ niềm vui.", "Hiệp mời Lộc đến dự lễ tốt nghiệp của Hiệp. Mình cùng chụp một tấm hình thật đẹp, cười thật tươi và giữ lại một kỷ niệm cho những ngày sau nhé."], closing: "Hẹn Lộc một ngày thật nhiều niềm vui!" },
      { id: "thao", name: "Trần Phương Thảo", initial: "T", type: "Em thương quý", salutation: "Gửi Thảo", message: ["Thảo ơi, Hiệp gửi Thảo một lời mời nhỏ cho một ngày thật đặc biệt: ngày Hiệp tốt nghiệp thạc sĩ.", "Hiệp rất vui nếu Thảo có thể đến dự lễ, cùng chúc mừng và lưu lại những tấm hình kỷ niệm. Sự hiện diện của Thảo sẽ là một phần thật đẹp trong ngày vui này."], closing: "Mong được gặp Thảo trong ngày tốt nghiệp!" },
      { id: "my", name: "VK CK My", initial: "M", type: "Một người đặc biệt", salutation: "Gửi người đặc biệt", message: ["My ơi, ngày Hiệp khoác lên mình chiếc áo tốt nghiệp thạc sĩ sắp đến rồi. Hiệp muốn dành riêng một lời mời thật ấm áp gửi đến My.", "Mong My có mặt trong khoảnh khắc này, cùng Hiệp mỉm cười, chụp những tấm hình thật đẹp và đón một dấu mốc mới. Có My bên cạnh, niềm vui của Hiệp sẽ thêm trọn vẹn."], closing: "Dành một chỗ thật đặc biệt cho My trong ngày vui này." },
      { id: "thay-thinh", name: "Thầy Bùi Quang Thịnh", initial: "T", type: "Kính mời Thầy", salutation: "Kính gửi", message: ["Em kính mời Thầy Bùi Quang Thịnh đến tham dự lễ tốt nghiệp thạc sĩ của em, Huỳnh Văn Hiệp.", "Với em, đây là một dấu mốc đáng trân trọng trên hành trình học tập. Em rất vinh dự nếu được đón Thầy đến chung vui và cùng lưu lại những hình ảnh kỷ niệm trong ngày đặc biệt này.", "Em kính chúc Thầy nhiều sức khỏe và mong được đón tiếp Thầy tại buổi lễ."], closing: "Em trân trọng kính mời Thầy." },
      { id: "co-phuong", name: "Cô Ngô Thị Mỹ Phượng", initial: "P", type: "Kính mời Cô", salutation: "Kính gửi", message: ["Em kính mời Cô Ngô Thị Mỹ Phượng đến tham dự lễ tốt nghiệp thạc sĩ của em, Huỳnh Văn Hiệp.", "Em mong được chia sẻ niềm vui và dấu mốc ý nghĩa này cùng Cô. Sự hiện diện của Cô sẽ là niềm vinh dự đối với em, đồng thời làm cho ngày tốt nghiệp thêm ấm áp và đáng nhớ.", "Em kính chúc Cô nhiều sức khỏe và mong có dịp chụp cùng Cô một tấm hình kỷ niệm tại buổi lễ."], closing: "Em trân trọng kính mời Cô." }
    ];

    const $ = id => document.getElementById(id);
    const screens = ["cover", "selection", "letter-screen"];
    function showScreen(id, focusId) {
      screens.forEach(screen => $(screen).hidden = screen !== id);
      window.scrollTo({ top: 0, behavior: "instant" });
      if (focusId) $(focusId).focus({ preventScroll: true });
    }
    function fillEvent(id, value, label) {
      const el = $(id);
      el.replaceChildren();
      if (value.trim()) el.textContent = value;
      else { const line = document.createElement("span"); line.className = "empty-field"; line.setAttribute("role", "img"); line.setAttribute("aria-label", label + " chưa điền"); el.append(line); }
    }
    function openLetter(guest) {
      $("recipient").textContent = guest.name;
      $("salutation").textContent = guest.salutation;
      $("message").replaceChildren(...guest.message.map(text => { const p = document.createElement("p"); p.textContent = text; return p; }));
      $("closing").textContent = guest.closing;
      fillEvent("event-date", EVENT.date, "Ngày tổ chức");
      fillEvent("event-time", EVENT.time, "Thời gian");
      fillEvent("event-location", EVENT.location, "Địa điểm");
      showScreen("letter-screen", "letter-title");
    }
    GUESTS.forEach(guest => {
      const button = document.createElement("button"); button.className = "guest";
      const avatar = document.createElement("span"); avatar.className = "guest-avatar"; avatar.textContent = guest.initial; avatar.setAttribute("aria-hidden", "true");
      const info = document.createElement("span");
      const name = document.createElement("span"); name.className = "guest-name"; name.textContent = guest.name;
      const meta = document.createElement("span"); meta.className = "guest-meta"; meta.textContent = guest.type;
      const arrow = document.createElement("span"); arrow.className = "arrow"; arrow.textContent = "↗"; arrow.setAttribute("aria-hidden", "true");
      info.append(name, meta); button.append(avatar, info, arrow);
      button.addEventListener("click", () => openLetter(guest)); $("guest-list").append(button);
    });
    $("open-envelope").addEventListener("click", () => {
      const button = $("open-envelope"); button.disabled = true; button.classList.add("opening");
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      setTimeout(() => { showScreen("selection", "selection-title"); button.classList.remove("opening"); button.disabled = false; }, reduced ? 0 : 1050);
    });
    $("back-cover").addEventListener("click", () => showScreen("cover", "open-envelope"));
    $("back-selection").addEventListener("click", () => showScreen("selection", "selection-title"));
    $("other-recipient").addEventListener("click", () => showScreen("selection", "selection-title"));
    $("print-letter").addEventListener("click", () => window.print());
const socket = io("http://localhost:2024");
// const socket = io("http://192.168.1.17:2024");
// const messageContainer = document.getElementById("message-container");
const messageForm = document.getElementById("send-container");
const messageInput = document.getElementById("message-input");
const messageContainer = $("#message-container");
const userFullname = $("#userFullname").html();
var date = new Date();
const time = moment(date).format("LT");
socket.emit("connection");
messageForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const message = messageInput.value;
  appendMyMessageRight({ message, time });
  socket.emit("send-message", { message, time, fullname: userFullname });
  messageInput.value = "";
});

socket.on("chated-message", (data) => {
  appendMyMessageLeft(data);
});

function appendMyMessageRight(data) {
  let thread = $(`
          <div class="chat-message-right pb-4">
          <div>
              <img
              src="https://bootdey.com/img/Content/avatar/avatar1.png"
              class="rounded-circle mr-1"
              alt="Chris Wood"
              width="30"
              height="30"
              />
              <div class="text-muted small text-nowrap mt-2">
             ${data.time}
              </div>
          </div>
          <div
              class="flex-shrink-1 bg-light rounded py-2 px-3 mx-3"
          >
              <div class="font-weight-bold mb-1">You</div>
              ${data.message}
          </div>
          </div>
      `);
  messageContainer.append(thread);
}

function appendMyMessageLeft(data) {
  let thread = $(`
            <div class="chat-message-left pb-4">
            <div>
                <img
                src="https://bootdey.com/img/Content/avatar/avatar1.png"
                class="rounded-circle mr-1"
                alt="Chris Wood"
                width="30"
                height="30"
                />
                <div class="text-muted small text-nowrap mt-2">
               ${data.time}
                </div>
            </div>
            <div
                class="flex-shrink-1 bg-light rounded py-2 px-3 mx-3"
            >
                <div class="font-weight-bold mb-1">${data.fullname}</div>
                ${data.message}
            </div>
            </div>
        `);
  messageContainer.append(thread);
}

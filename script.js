const dialogue = [

    {"interval": 0.5, "dialogue": "10pm na pala sheeeet", "delay": 0.5},
    {"interval": 0.5, "dialogue": "tulong!", "delay": 0.25},
    {"interval": 1.5, "dialogue": "guuuurrwaaaaauuuhhhhhhhhhhhhhhhhh", "delay": 1.8},
    {"interval": 2.1, "dialogue": "di mapigilang mag-isip...", "delay": 2.5},
    {"interval": 1.2, "dialogue": "na baka sa tagal", "delay": 1.6},
    {"interval": 0, "dialogue": "mahulog ang loob mo sa ibaaaaaaaaaaaaaaaa :(", "delay": 2.5},
]

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms * 1000));
}

function display_wolf(number) {
    let wolf = document.getElementById("wolf");
    if (wolf) {
        wolf.remove();
    }
    wolf = document.createElement("img");
    wolf.src = `${number}.jpg`;
    wolf.alt = "wolf";
    wolf.id = "wolf";
    document.body.appendChild(wolf);
}

async function display(message, delay) {
    let message_element = document.getElementById("message");
    message_element.innerHTML = "";
    const list_messages = message.split("");
    for (msg in list_messages) {
        let word_delay = delay / list_messages.length;
        message_element.innerHTML += list_messages[msg];
        await sleep(word_delay);
    }
}

async function tite() {
    for (item in dialogue) {
        if (Number(item) === 2) {
            display_wolf(0);
        }
        else if(Number(item) === 3) {
            display_wolf(1);
        }
        await display(dialogue[item]["dialogue"], dialogue[item]["delay"]);
        await sleep(dialogue[item]["interval"]);
    }
}

tite();
export default async function (body) {
  let data;

  try {
    const response = await fetch(`api/save_game`, {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (response.ok) {
      data = await response.json();
    } else {
      data = {
        isOldUser: Math.random() <= 0.5,
      };
    }
  } catch (e) {
    data = {
      isOldUser: Math.random() <= 0.5,
    };
  }

  return data;
}

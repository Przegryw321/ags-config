const plural_core = (count: number, a: string, b: string, c: string) => {
  if (count == 1)
    return a

  if (count >= 5 && count <= 21)
    return c

  const last_digit = count % 10

  if (last_digit >= 2 && last_digit <= 4)
    return b
  else
    return c
}

export default {
  updates:   (count: number) => plural_core(count, 'aktualizacja', 'aktualizacje', 'aktualizacji'),
  available: (count: number) => plural_core(count, 'dostępna', 'dostępne', 'dostępnych'),
  seconds:   (count: number) => plural_core(count, 'sekundę', 'sekundy', 'sekund'),
  minutes:   (count: number) => plural_core(count, 'minutę', 'minuty', 'minut'),
  hours:     (count: number) => plural_core(count, 'godzinę', 'godziny', 'godzin'),
}

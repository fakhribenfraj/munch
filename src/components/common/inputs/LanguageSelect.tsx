"use client";
import LOCALES from "@/constants/locales";
import { Link, MenuItem, Select, TextField, Typography } from "@mui/material";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { usePathname } from "next/navigation";
type LanguageSelectProps = {
  onChange?: (value: string) => void;
};
const LanguageSelect = ({ onChange }: LanguageSelectProps) => {
  const locale = useLocale();
  const t_locales = useTranslations("locales");
  const pathname = usePathname();
  return (
    <TextField
      value={locale}
      defaultValue={LOCALES[0].code}
      variant="standard"
      select
      SelectProps={{
        disableUnderline: true,
      }}
    >
      {LOCALES.map((locale) => (
        <MenuItem value={locale.code} key={locale.code}>
          <Link
            href={`/${locale.code}/${pathname}`}
            sx={{
              color: "inherit",
              display: "inline-flex",
              columnGap: 1,
              alignItems: "center",
              textDecoration: "none",
              verticalAlign: "middle",
              mr: 1,
            }}
          >
            <Image
              src={`/assets/icons/flags/${locale.code}.png`}
              alt={locale.code}
              width={24}
              height={24}
            />
            <Typography sx={{ fontSize: "0.875rem" }}>
              {t_locales(locale.name)}
            </Typography>
          </Link>
        </MenuItem>
      ))}
    </TextField>
  );
};

export default LanguageSelect;

"use client";
import LOCALES from "@/constants/locales";
import { Link, MenuItem, TextField, Typography } from "@mui/material";
import { useLocale } from "next-intl";
import Image from "next/image";
import { usePathname } from "next/navigation";
type LanguageSelectProps = {};
const LanguageSelect = ({}: LanguageSelectProps) => {
  const locale = useLocale();
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
              textTransform: "capitalize",
              mr: 1,
            }}
          >
            <Image
              src={`/assets/icons/flags/${locale.code}.png`}
              alt={locale.code}
              width={24}
              height={24}
            />
            <Typography sx={{ fontSize: "0.875rem" }}>{locale.name}</Typography>
          </Link>
        </MenuItem>
      ))}
    </TextField>
  );
};

export default LanguageSelect;

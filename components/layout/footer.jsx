import { useState, useEffect } from "react";
import Container from "../structure/container";
import Icon from "../utils/icon.util";
import Image from "next/image";
import Link from "next/link";
import css from "../../styles/structure/footer.module.scss";

import content from "../../content/footer.json";
import settings from "../../content/_settings.json";

export default function Footer() {
  return (
    <footer className={css.container}>
      <Container spacing={["verticalXXLrg", "bottomLrg"]}>
        <section className={css.sections}>
          <ul className={css.organization}>
            <li>
              <h4>Organization</h4>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/faqs">FAQs</Link>
            </li>
            <li>
              <Link href="/join">Join</Link>
            </li>
          </ul>

          <ul className={css.community}>
            <li>
              <h4>Community</h4>
            </li>
            <li>
              <Link href="/discord">Discord</Link>
            </li>
            <li>
              <Link href="/telegram">Telegram</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
          </ul>

          <ul className={css.events}>
            <li>
              <h4>Events</h4>
            </li>
            <li>
              <Link href="/hackathons">Hackathons</Link>
            </li>
            <li>
              <Link href="/meetups">Meetups</Link>
            </li>
          </ul>

          <ul className={css.social}>
            <li>
              <h4>Socials</h4>
            </li>
            <li>
              <Link href="/twitter">Twitter</Link>
            </li>
            <li>
              <Link href="/linkedin">LinkedIn</Link>
            </li>
            <li>
              <Link href="/instagram">Instagram</Link>
            </li>
            <li>
              <Link href="/youtube">YouTube</Link>
            </li>
          </ul>

          <ul className={css.contact}>
            <li>
              <h4>Contact</h4>
            </li>
            <li>
              <a href="mailto:contact@MakeItDevs.org">contact@MakeItDevs.org</a>
            </li>
          </ul>
        </section>

        <div className={css.bottom}>
          <div className={css.logo}>
            <h3>MakeItDevs</h3>
          </div>
          <p className={css.copyright}>
            © 2024 MakeItDevs. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}

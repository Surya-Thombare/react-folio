import {
  StyleSheet,
  Style,
  Link,
  View,
  Text,
  Image,
} from "@react-pdf/renderer";
import { IconText } from "./icon-text";

const styles = StyleSheet.create({
  container: {
    position: "relative",
    paddingBottom: 16,
    flexDirection: "row",
  },
  imageContainer: {
    position: "absolute",
    right: 0,
    top: -20,
  },
  image: {
    borderRadius: 99999,
  },
  title: {
    textTransform: "uppercase",
    fontSize: 20,
    fontFamily: "Quicksand",
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 12,
    marginTop: 4,
    fontFamily: "Quicksand",
    fontWeight: "bold",
  },
  infoContainer: {
    flexDirection: "row",
    marginTop: 12,
  },
  link: {
    marginRight: 16,
    textDecoration: "none",
  },
});

export function Heading({
  style,
  title,
  subtitle,
  avatarUrl,
  avatarSize = 100,
  information: { phone, email, website, location },
}) {
  return (
    <View style={[styles.container, style]}>
      <View style={{ margin: 1 }}>
        <Text style={styles.title}>{title}</Text>
        <Text style={[styles.subTitle, { color: "white" }]}>{subtitle}</Text>
        <View style={styles.infoContainer}>
          {phone ? (
            <Link src={`tel:${phone}`} style={styles.link}>
              <IconText text={phone} iconName="call" />
            </Link>
          ) : null}
          <Link src={`mailto:${email}`} style={styles.link}>
            <IconText text={email} iconName="atSymbol" />
          </Link>
          <Link src={website} style={styles.link}>
            <IconText text={website} iconName="link" />
          </Link>
          <IconText text={location} iconName="location" />
        </View>
      </View>
      {avatarUrl && (
        <View
          style={[
            styles.imageContainer,
            { width: avatarSize, height: avatarSize },
          ]}
        >
          <Image style={styles.image} src={avatarUrl} alt="Profile" />
        </View>
      )}
    </View>
  );
}


package com.baroservice.ws;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>anonymous complex type에 대한 Java 클래스입니다.
 * 
 * <p>다음 스키마 단편이 이 클래스에 포함되는 필요한 콘텐츠를 지정합니다.
 * 
 * <pre>
 * &lt;complexType&gt;
 *   &lt;complexContent&gt;
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType"&gt;
 *       &lt;sequence&gt;
 *         &lt;element name="CERTKEY" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="CorpNum" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="FromDocType" type="{http://www.w3.org/2001/XMLSchema}int"/&gt;
 *         &lt;element name="FromMgtKey" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="ToDocType" type="{http://www.w3.org/2001/XMLSchema}int"/&gt;
 *         &lt;element name="ToMgtKey" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *       &lt;/sequence&gt;
 *     &lt;/restriction&gt;
 *   &lt;/complexContent&gt;
 * &lt;/complexType&gt;
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "", propOrder = {
    "certkey",
    "corpNum",
    "fromDocType",
    "fromMgtKey",
    "toDocType",
    "toMgtKey"
})
@XmlRootElement(name = "RemoveDocLinkage")
public class RemoveDocLinkage {

    @XmlElement(name = "CERTKEY")
    protected String certkey;
    @XmlElement(name = "CorpNum")
    protected String corpNum;
    @XmlElement(name = "FromDocType")
    protected int fromDocType;
    @XmlElement(name = "FromMgtKey")
    protected String fromMgtKey;
    @XmlElement(name = "ToDocType")
    protected int toDocType;
    @XmlElement(name = "ToMgtKey")
    protected String toMgtKey;

    /**
     * certkey 속성의 값을 가져옵니다.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getCERTKEY() {
        return certkey;
    }

    /**
     * certkey 속성의 값을 설정합니다.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setCERTKEY(String value) {
        this.certkey = value;
    }

    /**
     * corpNum 속성의 값을 가져옵니다.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getCorpNum() {
        return corpNum;
    }

    /**
     * corpNum 속성의 값을 설정합니다.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setCorpNum(String value) {
        this.corpNum = value;
    }

    /**
     * fromDocType 속성의 값을 가져옵니다.
     * 
     */
    public int getFromDocType() {
        return fromDocType;
    }

    /**
     * fromDocType 속성의 값을 설정합니다.
     * 
     */
    public void setFromDocType(int value) {
        this.fromDocType = value;
    }

    /**
     * fromMgtKey 속성의 값을 가져옵니다.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getFromMgtKey() {
        return fromMgtKey;
    }

    /**
     * fromMgtKey 속성의 값을 설정합니다.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setFromMgtKey(String value) {
        this.fromMgtKey = value;
    }

    /**
     * toDocType 속성의 값을 가져옵니다.
     * 
     */
    public int getToDocType() {
        return toDocType;
    }

    /**
     * toDocType 속성의 값을 설정합니다.
     * 
     */
    public void setToDocType(int value) {
        this.toDocType = value;
    }

    /**
     * toMgtKey 속성의 값을 가져옵니다.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getToMgtKey() {
        return toMgtKey;
    }

    /**
     * toMgtKey 속성의 값을 설정합니다.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setToMgtKey(String value) {
        this.toMgtKey = value;
    }

}

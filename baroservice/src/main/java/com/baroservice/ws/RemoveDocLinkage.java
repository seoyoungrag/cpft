
package com.baroservice.ws;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>anonymous complex type�� ���� Java Ŭ�����Դϴ�.
 * 
 * <p>���� ��Ű�� ������ �� Ŭ������ ���ԵǴ� �ʿ��� �������� �����մϴ�.
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
     * certkey �Ӽ��� ���� �����ɴϴ�.
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
     * certkey �Ӽ��� ���� �����մϴ�.
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
     * corpNum �Ӽ��� ���� �����ɴϴ�.
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
     * corpNum �Ӽ��� ���� �����մϴ�.
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
     * fromDocType �Ӽ��� ���� �����ɴϴ�.
     * 
     */
    public int getFromDocType() {
        return fromDocType;
    }

    /**
     * fromDocType �Ӽ��� ���� �����մϴ�.
     * 
     */
    public void setFromDocType(int value) {
        this.fromDocType = value;
    }

    /**
     * fromMgtKey �Ӽ��� ���� �����ɴϴ�.
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
     * fromMgtKey �Ӽ��� ���� �����մϴ�.
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
     * toDocType �Ӽ��� ���� �����ɴϴ�.
     * 
     */
    public int getToDocType() {
        return toDocType;
    }

    /**
     * toDocType �Ӽ��� ���� �����մϴ�.
     * 
     */
    public void setToDocType(int value) {
        this.toDocType = value;
    }

    /**
     * toMgtKey �Ӽ��� ���� �����ɴϴ�.
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
     * toMgtKey �Ӽ��� ���� �����մϴ�.
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
